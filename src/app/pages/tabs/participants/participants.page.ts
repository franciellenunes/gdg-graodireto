import { Component } from '@angular/core';

import { ModalController, LoadingController } from '@ionic/angular';

import { ParticipantInfoPage } from '../../modal/participant-info/participant-info.page';
import { ParticipantsService } from 'src/app/services/participants.service';

@Component({
  selector: 'app-participants',
  templateUrl: 'participants.page.html',
  styleUrls: ['participants.page.scss']
})
export class ParticipantsPage {
  name: String = 'Francielle';
  email: String = 'francielle@gmail.com';

  constructor(
    public modalCtrl: ModalController,
    public participantsService: ParticipantsService,
    public loadingController: LoadingController
  ) {}

  private openModalToCreate() {
    this.openModal('', '', 'create');
  }

  private openModalToUpdate() {
    this.openModal(this.name, this.email, 'update');
  }

  async openModal(name: String, email: String, action: String) {
    const modal = await this.modalCtrl.create({
      component: ParticipantInfoPage,
      componentProps: { name: name, email: email, action: action }
    });
    return await modal.present();
  }
}
