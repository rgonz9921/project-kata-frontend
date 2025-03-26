import {User} from "./user.interface";

interface TicketType {
  total: number;
  sold: number;
  price: number;
}

interface Tickets {
  general: TicketType;
  vip: TicketType;
}

interface Event {
  _id: string;
  name: string;
  genres: string[];
  released: string;
  dateOfEvent: string;
  artist: string[];
  location: string;
  tickets: Tickets;
}

export interface Reservation {
  _id: string;
  event: Event;
  ticketType: "general" | "vip";
  quantity: number;
}

export interface UserWithReservation {
  _id: string;
  name: string;
  email: string;
  reservations: Reservation[];
}
