import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { SobrePage } from '../pages/sobre/sobre';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2'; 
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { SavePage } from '../pages/save/save';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    SobrePage,
    SavePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    apiKey, "AIzaSyCjejiA3uLihfEhVmnkYdC2iAFiVAuDx9E",
    authDomain, "topmovies-4c667.firebaseapp.com",
    databaseURL, "https://topmovies-4c667.firebaseio.com",
    projectId, "topmovies-4c667",
    storageBucket, "topmovies-4c667.appspot.com",
    messagingSenderId, "311432639951"
  ],
  AngularFireDatabaseModule

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
