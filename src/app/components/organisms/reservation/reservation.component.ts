import {Component, Input} from '@angular/core';
import {UserWithReservation} from "../../../models/user-with-reservation.interface";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
  standalone: false,
})
export class ReservationComponent {
  @Input() user!: UserWithReservation;
}
