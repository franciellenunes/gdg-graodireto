import { Component } from '@angular/core';

import { ModalController, LoadingController } from '@ionic/angular';

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

  name: String = 'Francielle';
  email: String = 'francielle@gmail.com';

  arrBooks = [];

  constructor(
    private modalCtrl: ModalController,
    private booksService: BooksService,
    private loadingController: LoadingController
  ) {
    this.getBooks();
    this.loading = this.loadingController.create({
      message: 'Carregando..',
      spinner: 'crescent'
    });
  }

  private openModalToCreate() {
    this.openModal('', '', 'create');
  }

  private openModalToUpdate() {
    this.openModal(this.name, this.email, 'update');
  }

  async openModal(name: String, email: String, action: String) {
    const modal = await this.modalCtrl.create({
      component: BookInfoPage,
      componentProps: { name: name, email: email, action: action }
    });
    return await modal.present();
  }

  async getBooks() {
    const loading = await this.loadingController.create({
      message: 'Carregando..',
      spinner: 'crescent'
    });
    await loading.present();
    return await this.booksService.getBooks().subscribe(
      res => {
        console.log(res);
        this.arrBooks = res;
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }
}
