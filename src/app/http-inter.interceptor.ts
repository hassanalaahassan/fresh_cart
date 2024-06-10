import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './Services/loader.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class HttpInterInterceptor implements HttpInterceptor {

  constructor(private _loader:LoaderService,
      private _NgxSpinnerService:NgxSpinnerService
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

      if (!request.url.includes('wishlist')) {
        this._NgxSpinnerService.show()
      }


    return next.handle(request).pipe(
      finalize(()=>this._NgxSpinnerService.hide())
    );
  }
}
