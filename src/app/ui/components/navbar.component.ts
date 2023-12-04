import { RoutePaths } from './../../routes.paths';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationGateway } from '../../remote/gateway/authentication.gateway';
import { NavbarUserComponent } from './navbar-user.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NavbarUserComponent],
  template: `
    <div class="navbar bg-base-200 flex justify-between items-center px-8">
      <a class="font-semibold text-lg opacity-80 hover:opacity-100" routerLink="/">Angular17App</a>
      @if (isAuthenticated) {
      <app-navbar-user />
      } @else {
      <a class="btn btn-secondary" [routerLink]="loginPath">Login</a>
      }
    </div>
  `,
})
export class NavbarComponent {
  private _authGateway = inject(AuthenticationGateway);

  loginPath = RoutePaths.login;

  get isAuthenticated(): boolean {
    return this._authGateway.isAuthenticated;
  }
}
