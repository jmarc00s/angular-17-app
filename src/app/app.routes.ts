import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ui/pages/home/home.component').then((comp) => comp.HomePageComponent),
  },
];
