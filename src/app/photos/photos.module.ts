import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotosComponent} from './photos.component';
import {RouterModule} from '@angular/router';
import {PhotoDetailsComponent} from '../photo-details/photo-details.component';
import {PhotoUploadComponent} from '../photo-upload/photo-upload.component';
import {FormsModule} from '@angular/forms';
import {DropzoneDirective} from '../dropzone.directive';



@NgModule({
  declarations: [PhotosComponent, PhotoDetailsComponent, PhotoUploadComponent, DropzoneDirective],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [PhotosComponent, PhotoDetailsComponent, PhotoUploadComponent]
})
export class PhotosModule { }
