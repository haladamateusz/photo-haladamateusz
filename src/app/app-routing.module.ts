import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PhotosComponent} from './photos/photos.component';
import {PhotoDetailsComponent} from './photo-details/photo-details.component';
import {PhotoUploadComponent} from './photo-upload/photo-upload.component';
import {LoginComponent} from './core/login/login.component';
import {AuthGuard} from './core/services/auth.guard';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'gallery', pathMatch: 'full'},
  {path: 'gallery', component: PhotosComponent},
  {path: 'gallery/:photoId', component: PhotoDetailsComponent},
  {path: 'upload', component: PhotoUploadComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
