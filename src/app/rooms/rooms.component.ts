import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Subject, catchError, of } from 'rxjs';
import { SpinnerService } from '../spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'inventory-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit , AfterViewInit {

  hotelName: string = 'Hiton Hotel';
  numberOfRooms: number = 10;
  hideRooms = true;
  title = 'room list';

  rooms: Room = {
    availableRooms: 15,
    bookedRooms: 5,
    totalRooms: 20,
  }

  roomList: RoomList[] = [];
 

  rooms$ = this.roomService.getRooms$;

  getCatchErr$ = this.roomService.getError$;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent

  constructor(private roomService: RoomsService, private dialogSpinner:SpinnerService, private route:Router) { }


  ngOnInit(): void {
    this.dialogSpinner.openSpinner();
    this.roomService.getRooms().subscribe((data)=> {
      if(data){
        this.roomList = data;
        this.dialogSpinner.closeSpinner();
      }
    });
  } 

  ngAfterViewInit() {
    // this.headerComponent.title='View Header';
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  } 

  selectRoom(data: RoomList) {
    console.log(data);
  }

  delete(id: string){
    this.roomService.deleteRoom(id).subscribe((data) => {
      this.roomList = data;
      this.getRoom();
    })
  }

  getRoom(){
    this.roomService.getRooms().subscribe((res) => {
      this.roomList = res
    });
  }

  editRoom(room:RoomList){
    console.log("update id", room);
    if(room){
      this.route.navigate(['/rooms/update-room', room.id])
    }
  }

  // addRoom() {
  //   const room: RoomList = { 
  //     id:7,
  //     roomNumber:'7',
  //     roomType: 'Private Suite',
  //     amenities: 'air conditioner, free wi-fi, bathroom',
  //     price: 10000,
  //     photos: 'https://unsplash.com/photos/bw0UE0UOIwo',
  //     checkintime: new Date('11-Nov-2021'),
  //     checkouttime: new Date('12-Nov-2021'),
  //     rating: 4.0
  //   };
  //   // this.roomList.push(room);
  //   // this.roomList = [...this.roomList, room]
  //   this.roomService.addRoom(room).subscribe((data) => {
  //     console.log("Add Room : ", data.body);
  //     if (data.body) {
  //       this.roomList.push(data.body);
  //       this.rooms$;
  //     }
      
  //   })
  // }

  // editRoom(){
  //   const room: RoomList = {
  //     id:3,
  //     roomNumber:'3',
  //     roomType: 'Private Suite',
  //     amenities: 'air conditioner, free wi-fi, bathroom',
  //     price: 20000,
  //     photos: 'https://unsplash.com/photos/bw0UE0UOIwo',
  //     checkintime: new Date('11-Nov-2021'),
  //     checkouttime: new Date('12-Nov-2021'),
  //     rating: 4.6
  //   };
  //   this.roomService.updateRoom(room).subscribe((data)=>{
  //     this.roomList= data;
  //   })
  // }

  // deleteRoom(){
  //   this.roomService.removeRoom(7).subscribe((data) => {
  //     this.roomList = data;
  //     this.getRoom();
  //     console.log(this.rooms$);
  //   })
  // }

  changeTitle() {
    this.title = 'rooms list' 
  }

}