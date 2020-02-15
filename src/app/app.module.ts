import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {PhotosModule} from './photos/photos.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore, AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import {LightboxModule} from 'ngx-lightbox';
import {environment} from '../environments/environment';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';
import { LoginComponent } from './core/login/login.component';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PhotosModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    LightboxModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: {} },
    AngularFirestore, AngularFireStorage, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
