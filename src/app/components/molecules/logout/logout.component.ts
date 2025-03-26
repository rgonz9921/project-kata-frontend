import {Component, inject} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
  standalone: false
})
export class LogoutComponent {
  private authService = inject(AuthService);

  constructor(private dialogRef: MatDialogRef<LogoutComponent>) {}

  confirmLogout(): void {
    this.authService.logout();
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false); // Cierra el modal sin cerrar sesión
  }
}
