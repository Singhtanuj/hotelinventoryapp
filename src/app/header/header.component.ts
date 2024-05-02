import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inventory-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
