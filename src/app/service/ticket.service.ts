import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {}

  Create(param: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/ticket/create', param);
}
}
