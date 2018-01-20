import { Component } from '@angular/core';
import { ViewController, PopoverController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  template: `
    <ion-list>
      <ion-list-header>Customize</ion-list-header>
      <button ion-item (click)="close()">Add a class</button>
    </ion-list>
  `
})

export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

  position: string = "tutor";

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public popoverCtrl: PopoverController) {}

  presentPopover(MyEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: MyEvent
    });
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data.email && data.uid) {
        this.toast.create({
          message: `Welcome to My First App, ${data.email}`,
          duration: 3000
        }).present();
      } else {
        this.toast.create({
          message: `Could not find authentication details.`,
          duration: 3000
        }).present();
      }
    })
  }
}
