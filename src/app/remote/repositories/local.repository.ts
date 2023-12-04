import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalRepository {
  get storage(): Storage {
    return localStorage;
  }
}

export enum LocalKeys {
  user = 'user',
}
