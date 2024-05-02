import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'inventory-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.scss'],
})
export class AddRoomsComponent implements OnInit {

  successMsg: string | undefined = '';
  hideBtn: boolean = false;

  roomList: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkintime: new Date(),
    checkouttime: new Date(),
    rating: 0,
  };

  constructor(private roomService: RoomsService) { }

  ngOnInit(): void {
  }

  addRoom(roomsForm: NgForm) {
    this.roomService.addRoom(this.roomList).subscribe((data) => {
      this.successMsg = 'Data saved successfully';
      console.log(this.successMsg);
      roomsForm.resetForm({
        roomNumber: '',
        roomType: '',
        amenities: '',
        price: 0,
        photos: '',
        checkintime: new Date(),
        checkouttime: new Date(),
        rating: 0,
      });
    });
    setTimeout(() => {
      this.successMsg = '';
    }, 2000);
  }



}
