import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private matdialog:MatDialog) { }

  openSpinner(){
    return this.matdialog.open(ProgressSpinnerComponent, {
      width:'250px',
      ariaLabel:'Please Wait',
      hasBackdrop: true
    })
  }

  closeSpinner(){
    return this.matdialog.closeAll();
  }
}
