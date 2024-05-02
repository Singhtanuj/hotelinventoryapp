import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'inventory-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit {

  roomNumber: number = 0;

  roomId$ = this.activatedRoute.params.pipe(
    map((param) => param['roomid'])
  );

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //  this.roomNumber = this.activatedRoute.snapshot.params['roomid'];

    // this.activatedRoute.params.subscribe((params) => {
    //   console.log(params);
    //   this.roomNumber = params['roomid'];
    // })

    // console.log(this.roomNumber);
    
  }

}
