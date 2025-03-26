import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { IReservationRequest } from '../models/reservation-request.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8080/v1/reservations';
  constructor(private http: HttpClient) {}

  createReservation(reservation: IReservationRequest){
    const token = localStorage.getItem('accessToken');
    if (!token) {
      throw new Error('No se encontró el token de autenticación');
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(this.baseUrl, reservation, { headers });
  }
}
