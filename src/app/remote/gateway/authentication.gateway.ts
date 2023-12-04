import { Injectable } from '@angular/core';
import { LocalKeys, LocalRepository } from '../repositories/local.repository';
import { User } from '../../domain/models/user';
import { Router } from '@angular/router';
import { RoutePaths } from '../../routes.paths';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGateway {
  constructor(private _localRepository: LocalRepository, private _router: Router) {}

  get isAuthenticated(): boolean {
    return !!this._localRepository.storage.getItem(LocalKeys.user);
  }

  get authenticatedUser(): User | null {
    const user = this._localRepository.storage.getItem(LocalKeys.user);

    if (user) return JSON.parse(user) as User;

    return null;
  }

  login(user: User): void {
    this._localRepository.storage.setItem(LocalKeys.user, JSON.stringify(user));
  }

  logout(): void {
    this._localRepository.storage.removeItem(LocalKeys.user);
    this._router.navigate([RoutePaths.login]);
  }
}
