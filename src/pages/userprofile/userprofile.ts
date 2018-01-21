import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserProfilePage {

   userprofile = {} as UserProfile;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
     public navCtrl: NavController, public navParams: NavParams) {
  }

  createUserProfile() {
     this.afAuth.authState.take(1).subscribe(auth => {
        this.afDatabase.list('userprofile/${auth.uid}').push(this.profile)
         ,then(() => this.navCtrl.push('TabsPage'))
     })
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

}
