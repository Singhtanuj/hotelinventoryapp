import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(request.method === 'GET'){

      /**************Always Clone the actual request***************/ 
      const new_request = request.clone({headers: new HttpHeaders(
        {token : '54d5cdgd5454535'}
      )});
      console.log("Request Interceptor", new_request);
      return next.handle(new_request);
    }

    
    return next.handle(request);
  }
}
