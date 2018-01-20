import { Component } from '@angular/core';
import { ViewController, PopoverController } from 'ionic-angular';


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

  constructor(public popoverCtrl: PopoverController) {}

  presentPopover(MyEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: MyEvent
    });
  }
}
