import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../components/organisms/header/header.component";
import {MaterialModule} from "../material.module";
import {FooterComponent} from "../components/organisms/footer/footer.component";
import {EventListComponent} from "../components/organisms/event-list/event-list.component";
import {EventCardComponent} from "../components/molecules/event-card/event-card.component";
import {EventDetailComponent} from "../components/organisms/event-detail/event-detail.component";
import {FormsModule} from "@angular/forms";
import {UserLoginComponent} from "../components/molecules/user-login/user-login.component";
import {HttpClientModule} from "@angular/common/http";
import {LogoutComponent} from "../components/molecules/logout/logout.component";
import {ReservationComponent} from "../components/organisms/reservation/reservation.component";
import {CreateUserComponent} from "../components/molecules/create-user/create-user.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EventListComponent,
    EventDetailComponent,
    UserLoginComponent,
    LogoutComponent,
    ReservationComponent,
    CreateUserComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EventListComponent,
    EventDetailComponent,
    UserLoginComponent,
    LogoutComponent,
    ReservationComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EventCardComponent,
    FormsModule,
    HttpClientModule,
  ]
})
export class SharedModule {
}
