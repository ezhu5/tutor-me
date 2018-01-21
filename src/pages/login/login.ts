import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { TabsPage } from '../tabs/tabs';
import { ProfiledetailsPage } from '../profiledetails/profiledetails';

import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;


  constructor(private afAuth: AngularFireAuth,

    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      if (result) {
        this.navCtrl.setRoot('ProfiledetailsPage');
      }
    }
    catch(e) {
      console.error(e);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
