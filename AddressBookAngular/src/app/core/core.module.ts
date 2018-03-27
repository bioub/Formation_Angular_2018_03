import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ]
})
export class CoreModule { }
