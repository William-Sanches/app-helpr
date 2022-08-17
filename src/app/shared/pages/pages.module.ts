import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/components/home/home.module';
import { HomeComponent } from 'src/app/components/home/home.component';



@NgModule({
  imports: [
    HomeModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
