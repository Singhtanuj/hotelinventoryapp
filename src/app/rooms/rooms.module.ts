import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UpdateRoomComponent } from './update-room/update-room.component';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomBookingComponent,
    AddRoomsComponent,
    UpdateRoomComponent,
    
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    HeaderModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class RoomsModule { }
