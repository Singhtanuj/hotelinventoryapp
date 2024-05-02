import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'inventory-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{

  title = 'hotelinventoryapp';
  role = 'admin';

  constructor(private router:Router){}

  ngOnInit(): void {
      // this.router.events.subscribe((event) => {
      //   console.log(event);
      // })
      // this.router.events.pipe(
      //   filter((event) => event instanceof NavigationStart)
      // ).subscribe((event) => {
      //   console.log('NavigationStart');
      // })

      // this.router.events.pipe(
      //   filter((event) => event instanceof NavigationEnd)
      // ).subscribe((event) => {
      //   console.log('NavigationEnd');

      // })
  }

  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
      const componentRef = this.vcr.createComponent(RoomsComponent);
      componentRef.instance.numberOfRooms = 100;
      componentRef.instance.hotelName='Hiton Hotel...'
  }
}
