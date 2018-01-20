import { Component } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Socket } from 'ng-socket-io';
/**
 * Generated class for the ChatRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
	messages = [];
	nickname = '';
	message = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private socket: Socket) {
  	this.nickname = this.navParams.get('nickname');
  	
  	this.getMessages().subscribe(message => {
  		this.messages.push(message);
  	});

  	this.getUsers().subscribe(data => {
  		let user = data['user'];
  		if (data['event'] == 'left') {
  			this.showToast('user left: ' + user);
  		} else {
  			this.showToast('user joined: ' + user)
  		}
  	})
  }

  ionViewWillLeave() {
  	this.socket.disconnect();
  }

  getUsers() {
  	let observable = new Observable(observer => {
  		this.socket.on('users-changed', data => {
  			observer.next(data);
  		})
  	});
  	return observable;
  }

  getMessages() {
  	let observable = new Observable(observer => {
  		this.socket.on('message', data => {
  			observer.next(data);
  		})
  	});
  	return observable;
  }

  sendMessage() {
  	this.socket.emit('add-message', { text: this.message});
  	this.message = '';
  }

  showToast(msg) {
  	let toast = this.toastCtrl.create({
  		message: msg,
  		duration:2000
  	});
  	toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatRoomPage');
  }

}
