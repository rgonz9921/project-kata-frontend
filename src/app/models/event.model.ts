export interface TypeTickets {
  total: number;
  sold: number;
  price: number;
}

export interface IEvent {
  _id: string;
  name: string;
  genres: string[];
  released: string;
  dateOfEvent: string;
  artist: string[];
  location: string;
  tickets?: Record<string, TypeTickets>;
}
