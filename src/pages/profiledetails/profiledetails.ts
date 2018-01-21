import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profiledetails } from '../../models/profiledetails';
import { AngularFireDatabase } from 'angularfire2/database';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ProfiledetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiledetails',
  templateUrl: 'profiledetails.html',
})
export class ProfiledetailsPage {

   profiledetails = {} as Profiledetails;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
     public navCtrl: NavController, public navParams: NavParams) {
  }

  createProfiledetails() {
     this.afAuth.authState.take(1).subscribe(auth => {
        this.afDatabase.object(`profiledetails/${auth.uid}`).set(this.profiledetails)
         .then(() => this.navCtrl.setRoot(TabsPage))
         //this.navCtrl.setRoot('ProfiledetailsPage');

     })
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfiledetailsPage');
  }

}
