import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {IEvent} from "../models/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8080/v1';
  private eventsSubject = new BehaviorSubject<any[]>([]); // Guarda eventos
  events$ = this.eventsSubject.asObservable(); // Exponer como Observable

  constructor(private http: HttpClient) {
  }

  getEvents(page: number, limit: number): Observable<IEvent[]> {
    const url = `${this.baseUrl}/events?page=${page}&limit=${limit}`;
    return new Observable((observer) => {
      this.http.get<any>(url).subscribe({
        next: (response) => {
          this.eventsSubject.next(response.event);
          observer.next(response);
          observer.complete();
        },
        error: (error) => observer.error(error)
      });
    });
  }

  getEvent(idEvent: string | null): Observable<IEvent> {
    const url = `${this.baseUrl}/events/${idEvent}`;
    return new Observable((observer) => {
      this.http.get<any>(url).subscribe({
        next: (response) => {
          this.eventsSubject.next(response.event);
          observer.next(response);
          observer.complete();
        },
        error: (error) => observer.error(error)
      });
    });
  }
}
