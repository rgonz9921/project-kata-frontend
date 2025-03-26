import {Component, inject, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {EventService} from "../../../services/event.service";
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'mlc-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
  standalone: false
})
export class UserLoginComponent implements OnInit{
  username = '';
  password = '';
  errorMessage = '';
  private authService = inject(AuthService);
  private userService = inject(UserService);

  constructor(private dialogRef: MatDialogRef<UserLoginComponent>) {}

  ngOnInit(): void {
    this.authService.isAuthenticated();
  }
  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        localStorage.setItem('accessToken', response.accessToken);
        this.userService.getUserByEmail(this.username).subscribe({
          next: (response) => {
            localStorage.setItem('user', JSON.stringify(response));
          }
        })
        this.dialogRef.close('authenticated');
      },
      error: (error) => {
        console.error('Error de autenticación:', error);
        this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
