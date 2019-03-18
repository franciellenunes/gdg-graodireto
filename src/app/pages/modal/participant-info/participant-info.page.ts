import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-participant-info',
  templateUrl: './participant-info.page.html',
  styleUrls: ['./participant-info.page.scss']
})
export class ParticipantInfoPage implements OnInit {
  @Input() name: string;
  @Input() email: string;
  @Input() action: string;

  private form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit() {
    if (this.action === 'update') {
      this.form.setValue({ name: this.name, email: this.email });
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  fform() {
    console.log('form.valid', this.form.valid);
  }
}
