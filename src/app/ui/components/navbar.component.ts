import { RoutePaths } from './../../routes.paths';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationGateway } from '../../remote/gateway/authentication.gateway';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="navbar bg-base-200 flex justify-between items-center px-8">
      <a class="font-semibold text-lg opacity-80 hover:opacity-100" routerLink="/">Angular17App</a>
      @if (isAuthenticated) {
      <span class="">Hello, {{ userName }}</span>
      } @else {
      <a class="btn btn-secondary" [routerLink]="loginPath">Login</a>
      }
    </div>
  `,
})
export class NavbarComponent {
  constructor(private authenticationGateway: AuthenticationGateway) {}

  loginPath = RoutePaths.login;

  get isAuthenticated(): boolean {
    return this.authenticationGateway.isAuthenticated;
  }

  get userName(): string {
    return this.authenticationGateway.authenticatedUser?.name ?? '';
  }
}
