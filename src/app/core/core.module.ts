import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [FooterComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent
  ]
})
export class CoreModule { }
