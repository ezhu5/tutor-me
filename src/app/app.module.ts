import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { MessagePage } from '../pages/message/message';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { PopoverPage } from '../pages/search/search';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    MessagePage,
    ProfilePage,
    TabsPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyDNw_P3AssSiPxMQsSE-sc-tKRYouNZXhw",
        authDomain: "tutor-me-5582a.firebaseapp.com",
        databaseURL: "https://tutor-me-5582a.firebaseio.com",
        projectId: "tutor-me-5582a",
        storageBucket: "",
        messagingSenderId: "232229048331"
      }),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    MessagePage,
    ProfilePage,
    TabsPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
