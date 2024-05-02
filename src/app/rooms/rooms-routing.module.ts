import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { LoginGuard } from '../guards/login.guard';
import { RoomsGuard } from './guards/rooms.guard';

const routes: Routes = [
  // { path: 'rooms/update-room/:updateRoomId', component:UpdateRoomComponent, canActivate: [LoginGuard] },
  { path: 'rooms', component:RoomsComponent,  
  children:[
    { path: 'update-room/:updateRoomId', component:UpdateRoomComponent},
    { path: 'rooms-add', component:AddRoomsComponent},
    { path: ':roomid', component:RoomBookingComponent },
    // { path: 'update-room/:updateRoomId', component:UpdateRoomComponent},
  ], 
  canActivate: [LoginGuard], 
  canActivateChild: [RoomsGuard],
  },
  
  // { path: 'rooms/:roomid', component:RoomBookingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
