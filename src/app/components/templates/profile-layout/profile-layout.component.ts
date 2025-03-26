import {Component, Input} from '@angular/core';
import {UserWithReservation} from "../../../models/user-with-reservation.interface";
import {SharedModule} from "../../../shared/shared.module";

@Component({
  selector: 'tmp-profile-layout',
  imports: [
    SharedModule
  ],
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.scss'
})
export class ProfileLayoutComponent {

  @Input() userWithReservation!: UserWithReservation;

}
