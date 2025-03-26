import {Component, Input} from '@angular/core';
import {IEvent} from "../../../models/event.model";

@Component({
  selector: 'org-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss',
  standalone: false,
})
export class EventDetailComponent {
  @Input() event!: IEvent;
  quantityGeneral: number = 1;
  quantityVip: number = 1;


  hasTicketType(type: string): boolean {
    return !!this.event?.tickets?.[type];
  }

  getTicketPrice(type: string): number {
    return this.event?.tickets?.[type]?.price ?? 0;
  }

  getTicketsSold(type: string): number {
    return this.event?.tickets?.[type]?.sold ?? 0;
  }

  getTicketsTotal(type: string): number {
    return this.event?.tickets?.[type]?.total ?? 0;
  }

  isSoldOut(type: string): boolean {
    return this.getTicketsSold(type) >= this.getTicketsTotal(type);
  }
}
