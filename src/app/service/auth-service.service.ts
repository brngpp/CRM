import { EventEmitter, Injectable, Output } from '@angular/core';

import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  @Output() emit=new EventEmitter();
  constructor(private httpBackend: HttpBackend) {}

  login(param: any): Observable<any> {
    let httpWithoutInterceptor = new HttpClient(this.httpBackend);
    return httpWithoutInterceptor.post<any>('http://localhost:8080/utente/accedi', param);
  }
}