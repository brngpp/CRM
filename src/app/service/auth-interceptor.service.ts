import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Recupera il token dal localStorage o da qualsiasi altra fonte
    const token = localStorage.getItem('token');
    
    


    // Se il token esiste, lo aggiunge all'header Authorization nella forma "Bearer <token>"
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    console.log('Richiesta:', request);


    // Prosegue con la richiesta
    return next.handle(request);
  }
}