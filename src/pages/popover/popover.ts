import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';



export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}