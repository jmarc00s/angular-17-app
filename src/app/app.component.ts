import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/components/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="flex flex-col">
      <app-navbar />
      <router-outlet />
    </section>
  `,
  imports: [CommonModule, NavbarComponent, RouterModule],
})
export class AppComponent {
  title = 'angular-17-app';
}
