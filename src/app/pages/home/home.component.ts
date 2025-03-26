import {Component, inject, OnInit} from '@angular/core';
import {HomeLayoutComponent} from "../../components/templates/home-layout/home-layout.component";
import {EventService} from "../../services/event.service";
import {IEvent} from "../../models/event.model";

@Component({
  selector: 'app-home',
  imports: [
    HomeLayoutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  events: IEvent[] = [];
  private eventService = inject(EventService);

  ngOnInit(): void {
    this.eventService.events$.subscribe((events: IEvent[]) => {
      this.events = events;
      console.log('Eventos actualizados:', this.events);
    });
    this.eventService.getEvents(0, 5).subscribe();
  }

}
