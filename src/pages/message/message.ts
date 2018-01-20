import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
	//the user name from login ?
	nickname = '';

	constructor(public navCtrl: NavController, private socket: Socket) {

	}

	joinChat() {
		this.socket.connect();
		this.socket.emit('set-nickname', this.nickname);
		this.navCtrl.push('ChatRoomPage', {nickname: this.nickname});
	}

 
}
