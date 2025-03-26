import {TicketType} from "./ticket-type.enum";

export interface IReservationRequest {
  eventId: string;
  ticketType: TicketType;
  quantity: number;
}
