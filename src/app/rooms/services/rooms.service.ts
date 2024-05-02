import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from 'src/environments/environment';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { APPCONFIG } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Subscriber, catchError, observable, of, shareReplay } from 'rxjs';
import { Token } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  // roomList: RoomList[] = [
  //   {
  //     // roomNumber:1,
  //     roomType: 'Deluxe Room',
  //     amenities: 'Air Conditioner, Free Wi-Fi, bathroom, Kitchen',
  //     price: 500,
  //     photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
  //     checkintime: new Date('11-Nov-2021'),
  //     checkouttime: new Date('12-Nov-2021'),
  //     rating:3.5
  //   },
  //   {
  //     // roomNumber:2,
  //     roomType: 'Deluxe Room',
  //     amenities: 'Air Conditioner, Free Wi-Fi, bathroom, Kitchen',
  //     price: 1000,
  //     photos: 'https://unsplash.com/photos/bw0UE0UOIwo',
  //     checkintime: new Date('11-Nov-2021'),
  //     checkouttime: new Date('12-Nov-2021'),
  //     rating:4.3
  //   },
  //   {
  //     // roomNumber:3,
  //     roomType: 'Private Suite',
  //     amenities: 'Air Conditioner, Free Wi-Fi, bathroom, Kitchen',
  //     price: 10000,
  //     photos: 'https://unsplash.com/photos/bw0UE0UOIwo',
  //     checkintime: new Date('11-Nov-2021'),
  //     checkouttime: new Date('12-Nov-2021'),
  //     rating:2.6
  //   },
  // ]
  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();
  // headers = new HttpHeaders( { token: '45d4d221dsddfg' } );

  getRooms$ = this.http.get<RoomList[]>('http://localhost:3000/createRoom').pipe(
    shareReplay(1),
    catchError((err) => {
      console.log("catch error", err);
      this.error$.next(err.message);
      return of([]);
    })
  );


  constructor(@Inject(APP_SERVICE_CONFIG) private appConfig: APPCONFIG, private http: HttpClient) {
    // console.log("From Value Provider",this.appConfig.appEndPoint);
    // console.log("From Environment",environment.apiEndPoints);
    // console.log("room ser I")
  }


  getRooms() {
    return this.http.get<RoomList[]>('http://localhost:3000/createRoom');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList>('http://localhost:3000/createRoom', room, { observe: "response" });
  }

  updateRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`http://localhost:3000/createRoom/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`http://localhost:3000/createRoom/${id}`);
  }

  getRoom(id: string | null){
    return this.http.get<RoomList>(`http://localhost:3000/createRoom/${id}`);
  }

  editRoom(room:RoomList) {
    return this.http.put<RoomList>(`http://localhost:3000/createRoom/${room.id}`, room);
  }
}
