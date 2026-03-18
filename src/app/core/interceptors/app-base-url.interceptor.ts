import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiBaseUrlInterceptor implements HttpInterceptor {
  private readonly baseUrl = environment.apiURL;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq =
      req.url.startsWith('http') || req.url.indexOf('assets') !== -1
        ? req
        : req.clone({ url: `${this.baseUrl}${req.url.charAt(0) !== '/' ? '/' : ''}${req.url}` });
    return next.handle(apiReq);
  }
}
