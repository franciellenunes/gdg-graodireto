import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { ModalController } from '@ionic/angular';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.page.html',
  styleUrls: ['./book-info.page.scss']
})
export class BookInfoPage implements OnInit {
  @Input() title: string;
  @Input() email: string;
  @Input() action: string;
  @Input() bookID: number;

  private form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private booksService: BooksService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
    if (this.action === 'update') {
      this.form.setValue({ title: this.title, email: this.email });
    }
  }

  closeModal(message: string, color: string) {
    this.modalCtrl.dismiss({
      message: message,
      color: color
    });
  }

  save() {
    if (this.action === 'create') {
      this.saveBook();
    } else if (this.action === 'update') {
      this.updateBook(this.bookID);
    }
  }

  async saveBook() {
    await this.booksService.postBook(this.form.value).subscribe(
      res => {
        this.closeModal('Livro adicionado com sucesso', 'success');
      },
      err => {
        this.closeModal('Ops! Não foi possível adicionar o livro', 'danger');
        console.log(err);
      }
    );
  }

  async updateBook(bookID: number) {
    await this.booksService.updateBook(bookID, this.form.value).subscribe(
      res => {
        this.closeModal('Livro atualizado com sucesso', 'success');
      },
      err => {
        this.closeModal('Ops! Não foi possível atualizar o livro', 'danger');
        console.log(err);
      }
    );
  }

  async deleteBook(bookID: number) {
    await this.booksService.deleteBook(this.bookID).subscribe(
      res => {
        this.closeModal('Livro excluído com sucesso', 'success');
      },
      err => {
        this.closeModal('Ops! Não foi possível excluir o livro', 'danger');
        console.log(err);
      }
    );
  }
}
