import { Component } from '@angular/core';
import { AuthenticationGateway } from '../../remote/gateway/authentication.gateway';

@Component({
  standalone: true,
  selector: 'app-navbar-user',
  template: `<div class="flex gap-4 items-center">
    <span class="text-lg">Hello, {{ userName }}</span>
    <button (click)="logout()" class="btn btn-warning">Logout</button>
  </div>`,
})
export class NavbarUserComponent {
  constructor(private _authGateway: AuthenticationGateway) {}

  get userName(): string {
    return this._authGateway.authenticatedUser?.name ?? '';
  }

  logout(): void {
    this._authGateway.logout();
  }
}
