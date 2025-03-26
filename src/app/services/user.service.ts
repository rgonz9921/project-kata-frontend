import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/v1/users';
  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<any> {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      throw new Error('No se encontró el token de autenticación');
    }
    const endpoint = `${this.baseUrl}/searchByEmail?email=${email}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get(endpoint, { headers });
  }

  getReservationByEmail(email: string): Observable<any> {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      throw new Error('No se encontró el token de autenticación');
    }
    const endpoint = `${this.baseUrl}/reservation?email=${email}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get(endpoint, { headers });
  }
}
