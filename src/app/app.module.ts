import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_SERVICE_CONFIG, App_Config } from './AppConfig/appconfig.service';
import { RequestInterceptor } from './interceptor/request/request.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    ProgressSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    RoomsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HeaderModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [
    {
      provide : APP_SERVICE_CONFIG,
      useValue : App_Config
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : RequestInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
