import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {PhotosModule} from './photo/photos.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore, AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import {LightboxModule} from 'ngx-lightbox';
import {environment} from '../environments/environment';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
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
    AngularFirestore, AngularFireStorage, AngularFireAuth, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
