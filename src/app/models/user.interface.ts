export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
  reservations: string[];
}
