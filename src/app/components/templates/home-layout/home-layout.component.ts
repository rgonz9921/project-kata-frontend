import {Component, Input} from '@angular/core';
import {HeaderComponent} from "../../organisms/header/header.component";
import {FooterComponent} from "../../organisms/footer/footer.component";
import {EventListComponent} from "../../organisms/event-list/event-list.component";
import {SharedModule} from "../../../shared/shared.module";
import {IEvent} from "../../../models/event.model";

@Component({
  selector: 'tmp-home-layout',
  imports: [
    SharedModule
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {
  @Input() events: IEvent[] = [];

}
