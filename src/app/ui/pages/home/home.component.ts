import { Component, OnInit } from '@angular/core';
import { AuthenticationGateway } from '../../../remote/gateway/authentication.gateway';

@Component({
  standalone: true,
  template: `<section class="h-page flex flex-col gap-8 items-center justify-center">
    <h1 class="text-lg font-bold">Welcome to Angular 17!!</h1>
    @if(isAuthenticated){
    <p>Welcome, {{ userName }}!</p>
    }
  </section>`,
})
export class HomePageComponent {
  constructor(private _authGateway: AuthenticationGateway) {}

  get isAuthenticated(): boolean {
    return this._authGateway.isAuthenticated;
  }

  get userName(): string {
    return this._authGateway.authenticatedUser?.name ?? '';
  }
}
