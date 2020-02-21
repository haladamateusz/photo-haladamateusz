import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotosComponent} from './photos/photos.component';
import {RouterModule} from '@angular/router';
import {PhotoDetailsComponent} from './photo-details/photo-details.component';
import {PhotoUploadComponent} from './photo-upload/photo-upload.component';
import {FormsModule} from '@angular/forms';
import {DropzoneDirective} from '../dropzone.directive';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';



@NgModule({
  declarations: [PhotosComponent, PhotoDetailsComponent, PhotoUploadComponent, DropzoneDirective, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  exports: [PhotosComponent, PhotoDetailsComponent, PhotoUploadComponent, LoginComponent]
})
export class PhotosModule { }
