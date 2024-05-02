import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  
  /** Default Route **/
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  /** Lazy Loaded Route **/
  { path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then((m) => m.RoomsModule), canActivate: [LoginGuard] },
  
  
  { path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard] },
  { path: 'not-found', component: NotFoundComponent },
  
  { path: 'booking', loadChildren: () => import('./bookingroomlist/bookingroomlist.module').then(m => m.BookingroomlistModule), canActivate: [LoginGuard] },
  
  { path: '**', redirectTo: '/not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
