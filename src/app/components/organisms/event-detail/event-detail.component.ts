import {Component, inject, Input} from '@angular/core';
import {IEvent} from "../../../models/event.model";
import {ReservationService} from "../../../services/reservation.service";
import {IReservationRequest} from "../../../models/reservation-request.interface";
import {TicketType} from "../../../models/ticket-type.enum";

@Component({
  selector: 'org-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss',
  standalone: false,
})
export class EventDetailComponent {
  @Input() event!: IEvent;

  private reservationService = inject(ReservationService);

  quantityGeneral: number = 1;
  quantityVip: number = 1;

  reserve(ticketType: TicketType, quantity: number) {
    if (!quantity || quantity < 1) {
      alert('Ingrese una cantidad válida');
      return;
    }
    if(this.event._id){
      const reservationRequest: IReservationRequest = {
        eventId: this.event._id,
        ticketType,
        quantity
      };
      this.reservationService.createReservation(reservationRequest).subscribe({
        next: (response) => {
          console.log('Reserva exitosa:', response);
          alert('Reserva realizada con éxito');
        },
        error: (error) => {
          console.error('Error al reservar:', error);
          alert('Error al realizar la reserva');
        }
      });
    }
    console.log(`Reservando ${quantity} boletos de tipo ${ticketType}`);
  }

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

  protected readonly TicketType = TicketType;
}
