import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'inventory-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {

  // roomList: RoomList = {
  //   roomNumber: '',
  //   roomType: '',
  //   amenities: '',
  //   price: 0,
  //   photos: '',
  //   checkintime: new Date(),
  //   checkouttime: new Date(),
  //   rating: 0,
  // };

  hideBtn:boolean = false;
  updateRoomId: RoomList |undefined;
  roomId :undefined | RoomList;
  updateMsg:string='';

  constructor(private roomService:RoomsService, private activatedRoute:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    let updateRoomId = this.activatedRoute.snapshot.paramMap.get('updateRoomId');
    if(updateRoomId){
      this.roomService.getRoom(updateRoomId).subscribe((data) => {
          this.roomId = data;
      })
    }
  }

  updateRoom(newVal:RoomList){
    if(this.roomId){
      newVal.id = this.roomId.id;
    }
    this.roomService.editRoom(newVal).subscribe((data) => {
      if(data){
        this.updateMsg = 'Room Updated';
      }
    })
    
    setTimeout(() => {
      this.route.navigate(['/rooms']);
    }, 2002);
  }


}
