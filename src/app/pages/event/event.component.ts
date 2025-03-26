import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {EventLayoutComponent} from "../../components/templates/event-layout/event-layout.component";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../services/event.service";
import {IEvent} from "../../models/event.model";

@Component({
  selector: 'app-event',
  imports: [EventLayoutComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent implements OnInit {

  eventId: string | null = null;
  event!: IEvent;

  constructor(private route: ActivatedRoute) {}
  private eventService = inject(EventService);

  ngOnInit(): void {
    console.log('Evento seleccionado:', this.eventId);
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get('id');
      this.eventService.getEvent(this.eventId).subscribe((event: IEvent) => {
        this.event = event;
        console.log('Evento actualizado:', this.event);
      });
    });
  }
}
