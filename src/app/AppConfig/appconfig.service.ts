import { InjectionToken } from "@angular/core";
import { APPCONFIG } from "./appconfig.interface";
import { environment } from '../../environments/environment';

/* This become a service we are going to use  **SERVICE READY** */ 
export const APP_SERVICE_CONFIG = new InjectionToken<APPCONFIG>('app.config');

/* value providers to provide some values aur data **VALUE READY** */ 
export const App_Config:APPCONFIG = {
    appEndPoint: environment.apiEndPoints
}