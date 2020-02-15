import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Gallery} from "../../models/galleries.model";
import {PhotosService} from "../core/services/photos.service";


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})

export class PhotosComponent implements OnInit {


  galleries: Observable<Gallery[]>;

  constructor(private photoService: PhotosService) {

  }

  ngOnInit() {
    this.galleries = this.photoService.getGalleries();
  }

}
