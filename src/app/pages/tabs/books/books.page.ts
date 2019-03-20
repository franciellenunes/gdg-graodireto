import { Component } from '@angular/core';

import {
  ModalController,
  LoadingController,
  ToastController
} from '@ionic/angular';

import { BookInfoPage } from '../../modal/book-info/book-info.page';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: 'books.page.html',
  styleUrls: ['books.page.scss']
})
export class BooksPage {
  isLoading = false;
  loading;

  title: String = 'Francielle';
  email: String = 'francielle@gmail.com';

  arrBooks = [];

  constructor(
    private modalCtrl: ModalController,
    private booksService: BooksService,
    private loadingController: LoadingController,
    public toastController: ToastController
  ) {
    this.getBooks();
    this.loading = this.loadingController.create({
      message: 'Carregando..',
      spinner: 'crescent'
    });
  }

  async getBooks() {
    const loading = await this.loadingController.create({
      message: 'Carregando..',
      spinner: 'crescent'
    });
    await loading.present();
    return await this.booksService.getBooks().subscribe(
      res => {
        this.arrBooks = res.data;
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  openModalToCreate() {
    this.presentModal('', '', 'create', undefined);
  }

  openModalToUpdate(book: number) {
    this.presentModal(book['title'], book['email'], 'update', book['id']);
  }

  async presentModal(
    title: String,
    email: String,
    action: String,
    bookID?: any
  ) {
    const modal = await this.modalCtrl.create({
      component: BookInfoPage,
      componentProps: {
        title: title,
        email: email,
        action: action,
        bookID: bookID
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data.message !== '' && data.message !== undefined) {
      this.presentToast(data.message, data.color);
      this.getBooks();
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: true,
      position: 'bottom',
      duration: 2000,
      color: color,
      closeButtonText: 'Fechar'
    });
    await toast.present();
  }
}
