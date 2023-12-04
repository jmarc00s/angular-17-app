import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="navbar bg-base-200 flex justify-between items-center px-8">
      <a class="font-semibold text-lg opacity-80 hover:opacity-100" routerLink="/">Angular17App</a>
    </div>
  `,
})
export class NavbarComponent {}
