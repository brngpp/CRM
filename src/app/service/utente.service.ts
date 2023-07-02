import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient) {}

  Register(param: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/utente/registrati', param);
}
}
