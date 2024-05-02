import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingroomlistComponent } from './bookingroomlist.component';

const routes: Routes = [{ path: '', component: BookingroomlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingroomlistRoutingModule { }
