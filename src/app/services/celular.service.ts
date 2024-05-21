import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Celular } from '../models/celular.model';

@Injectable({
  providedIn: 'root'
})
export class CelularService {
  private apiUrl = 'http://localhost:8080/api/celulares';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Celular[]> {
    return this.http.get<Celular[]>(this.apiUrl);
  }

  create(celular: Celular): Observable<Celular> {
    return this.http.post<Celular>(this.apiUrl, celular);
  }
}
