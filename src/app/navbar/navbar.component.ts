import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'inventory-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoading = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('NavigationStart');
      if (event) {
        console.log("type of",typeof (event));
        this.isLoading = true;
      }
    })

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log("events", event);
      console.log('NavigationEnd');
      if (event) {
        console.log("type of",typeof (event));
        this.isLoading = false;
      }
    })
  }

}
