import {Component, Input} from '@angular/core';
import {IEvent} from "../../../models/event.model";
import {CurrencyPipe, DatePipe, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'mlc-event-card',
  imports: [
    CurrencyPipe,
    DatePipe,
    NgIf
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  @Input() event: IEvent | null = null;


  constructor(private router: Router) {}

  goToEventDetail() {
    console.log('goToEventDetail');
    this.router.navigate(['/event-detail', this.event?._id]);
  }
}
