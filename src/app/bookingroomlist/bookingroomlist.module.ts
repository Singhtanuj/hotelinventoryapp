import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingroomlistRoutingModule } from './bookingroomlist-routing.module';
import { BookingroomlistComponent } from './bookingroomlist.component';


@NgModule({
  declarations: [
    BookingroomlistComponent
  ],
  imports: [
    CommonModule,
    BookingroomlistRoutingModule
  ]
})
export class BookingroomlistModule { }
