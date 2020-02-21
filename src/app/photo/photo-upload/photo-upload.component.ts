import {Component} from '@angular/core';
import {PhotosService} from '../services/photos.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent {

  constructor(private photoService: PhotosService) {

  }


  modelName: string;
  collectionName: string;
  files: File[] = [];
  thumbnail: File;

  // State for dropzone CSS toggling
  isHovering: boolean;

  uploadFiles() {
    const uploadData = {
      thumbnailImage: this.thumbnail,
      imageFiles: this.files,
      modelName: this.modelName,
      collectionName: this.collectionName
    };
    this.photoService.startUpload(uploadData);
    this.files = [];
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  getThumbnailDetails(e) {
    console.log(e.target.files);
    this.thumbnail = e.target.files[0];
  }

  getFileDetails(e) {
    console.log(e.target.files);
    for (const index of e.target.files) {
      this.files.push(index);
    }
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

}
