import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, Self, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'inventory-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges  {

@Input() rooms: RoomList[] = [];

@Input() title: string = '';

@Output() selectedRoom = new EventEmitter<RoomList>();

@Output() deleteRoom = new EventEmitter<string>();

@Output() updateRoom = new EventEmitter<RoomList>();


constructor(private roomService:RoomsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase(); 
    }
  }

  selected(room : RoomList){
    this.selectedRoom.emit(room);
    // console.log(room);
  }

  getRoom(){
    this.roomService.getRooms().subscribe((data) =>{
      this.rooms = data;
    })
  }

  delete(id:string){
    // this.roomService.deleteRoom(id).subscribe((data => {
    //   console.log(data);
    //   // this.roomList = data;
    //   this.getRoom();
    // }))
    this.deleteRoom.emit(id);
  }

  editRoom(room:RoomList){
    this.updateRoom.emit(room);
  }

}


