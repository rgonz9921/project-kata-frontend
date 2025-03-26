import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UserLoginComponent} from "../../molecules/user-login/user-login.component";
import {AuthService} from "../../../services/auth.service";
import {LogoutComponent} from "../../molecules/logout/logout.component";

@Component({
  selector: 'org-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  private authService = inject(AuthService);
  constructor(private router: Router,
              private dialog: MatDialog) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(UserLoginComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'authenticated') {
        this.isAuthenticated = true;
      }
    });
  }

  openLogoutModal(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isAuthenticated = false;
        console.log('Sesión cerrada');
      }
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToProfile() {
    console.log('goToProfile');
  }
}
