import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhotosService} from '../services/photos.service';
import {Observable} from 'rxjs';
import {Photos} from '../../models/photos.model';
import {PhotoInfo} from '../../models/photoInfo.model';
import {Lightbox, LightboxConfig} from 'ngx-lightbox';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  photos: Observable<Photos[]>;
  info: Observable<PhotoInfo>;
  private id: string;
  private albums = [];
  private modelName: string;

  constructor(private route: ActivatedRoute,
              private photoService: PhotosService,
              private lightbox: Lightbox,
              private lightboxConfig: LightboxConfig) {

    lightboxConfig.wrapAround = true;
    lightboxConfig.showImageNumberLabel = true;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('photoId');
    });
    this.photos = this.photoService.getGallery(this.id);
    this.info = this.photoService.getGalleryInfo(this.id);
    this.photoService.getGalleryInfo(this.id).subscribe((res) => this.modelName = res.name);
    this.photoService.getURLs(this.id).subscribe((res) => {
      for (const item of res) {
        const src = item.imageSource;
        const album = {
          src,
          caption: this.modelName
        };
        this.albums.push(album);
      }
    });
  }

  open(index: number): void {
    this.lightbox.open(this.albums, index);
  }

}
