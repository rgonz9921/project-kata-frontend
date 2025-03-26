import {Component, Input} from '@angular/core';
import {IEvent} from "../../../models/event.model";

@Component({
  selector: 'org-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
  standalone: false,
})
export class EventListComponent {
  @Input() events: IEvent[] = [];
}
