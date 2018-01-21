import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { TabsPage } from '../tabs/tabs';
<<<<<<< HEAD
import { UserProfilePage } from '../userprofile/userprofile';
=======
import { ProfiledetailsPage } from '../profiledetails/profiledetails';
>>>>>>> 0eee94dea122500131d41d137c34ef90daf3d4eb

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
<<<<<<< HEAD
        this.navCtrl.setRoot(UserProfilePage);
=======
        this.navCtrl.setRoot('ProfiledetailsPage');
>>>>>>> 0eee94dea122500131d41d137c34ef90daf3d4eb
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
