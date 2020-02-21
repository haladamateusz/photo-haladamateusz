import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Gallery} from '../../models/galleries.model';
import {map, mergeMap} from 'rxjs/operators';
import {Photos} from '../../models/photos.model';
import {PhotoInfo} from '../../models/photoInfo.model';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  task: AngularFireUploadTask;
  downloadURL;

  constructor(private storage: AngularFireStorage, private readonly afs: AngularFirestore) {

  }

  getGalleries() {
    return this.afs.collection<Gallery>('CollectionList').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Gallery;
        return {...data};
      }))
    );
  }

  getGallery(photoId) {
    return this.afs.collection<Photos>(photoId, ref => ref.where('type', '==', 'picture'))
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Photos;
            return {...data};
          })
        )
      );
  }

  getURLs(photoId) {
    return this.afs.collection<Photos>(photoId, ref => ref.where('type', '==', 'picture'))
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Photos;
            const imageSource = data.downloadURL;
            return {imageSource};
          })
        )
      );
  }

  getGalleryInfo(photoId) {
    return this.afs.collection<PhotoInfo>(photoId, ref => ref.where('type', '==', 'info')
      .limit(1))
      .snapshotChanges().pipe(
        mergeMap(actions => actions.map(a => {
            const data = a.payload.doc.data() as PhotoInfo;
            return {...data};
          })
        )
      );
  }

  startUpload(uploadData) {
    const today = new Date();
    const date = {
      year: today.getFullYear(),
      month: today.getMonth() >= 9 ? today.getMonth() + 1 : `0${today.getMonth() + 1}`,
      day: today.getDate()
    };
    this.uploadThumbnail(date, uploadData);
    this.uploadFiles(date, uploadData);
    console.log('wyslane mordeczko');
  }

  uploadThumbnail(date, uploadData) {
    const path = `${uploadData.collectionName}-${date.month}-${date.year}/thumbnail/${Date.now()}_${uploadData.thumbnailImage.name}`;
    const thumbnailRef = this.storage.ref(path);
    this.task = this.storage.upload(path, uploadData.thumbnailImage);
    this.task.snapshotChanges().subscribe({
        complete: async () => {
          // The file's download URL
          this.downloadURL = await thumbnailRef.getDownloadURL().toPromise();
          this.afs.collection(uploadData.collectionName)
            .add({
              type: 'thumbnail',
              date: this.downloadURL,
              name: uploadData.modelName
            });
          this.afs.collection(uploadData.collectionName)
            .add({
              type: 'info',
              date: `${date.day}.${date.month}.${date.year}`,
              name: uploadData.modelName
            });
          this.afs.collection('CollectionList')
            .doc(uploadData.collectionName).set({
            collectionName: uploadData.collectionName,
            downloadURL: this.downloadURL,
            modelName: uploadData.modelName
          });
          console.log('thumbnail poszla');
        }
      }
    );
  }

  uploadFiles(date, uploadData) {
    for (const file of uploadData.imageFiles) {

      const path = `${uploadData.collectionName}-${date.month}-${date.year}/${Date.now()}_${file.name}`;

      // Reference to storage bucket
      const ref = this.storage.ref(path);
      // The main task
      this.task = this.storage.upload(path, file);
      this.task.snapshotChanges().subscribe({
          complete: async () => {
            // The file's download URL
            this.downloadURL = await ref.getDownloadURL().toPromise();
            console.log(this.afs.collection(uploadData.collectionName).add({
              type: 'picture',
              downloadURL: this.downloadURL,
              path
            }));
            console.log('itemek poszedl');
          }
        }
      );
    }
  }

}

