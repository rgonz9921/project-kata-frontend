import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.interface";
import {UserWithReservation} from "../../models/user-with-reservation.interface";
import {ProfileLayoutComponent} from "../../components/templates/profile-layout/profile-layout.component";

@Component({
  selector: 'app-profile',
  imports: [
    ProfileLayoutComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  userWithReservation!: UserWithReservation;
  private userService = inject(UserService);

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : null;
    if(this.user){
      this.userService.getReservationByEmail(this.user.email).subscribe({
        next: (result: UserWithReservation) => {
          console.log('Reservaciones de:', result);
          this.userWithReservation = result;
          console.log('userWithReservation', this.userWithReservation);
        }
      })
    }
  }

}
