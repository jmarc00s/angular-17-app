import { AuthenticationGateway } from './../../../remote/gateway/authentication.gateway';
import { Component, OnInit, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePaths } from '../../../routes.paths';

@Component({
  imports: [ReactiveFormsModule],
  standalone: true,
  template: `
    <section class="flex flex-col w-full h-page items-center justify-center">
      <form
        [formGroup]="loginForm"
        (ngSubmit)="login()"
        class="w-1/3 bg-base-200 p-4 rounded-md shadow-md flex flex-col gap-2"
      >
        <p class="text-lg font-semibold text-center">Login</p>
        <label for="name" id="name">Name</label>
        <input class="input input-bordered w-full" formControlName="name" id="name" />
        <button type="submit" class="btn btn-success shadow-md" [disabled]="loginForm.invalid">
          Login
        </button>
      </form>
    </section>
  `,
})
export class LoginPageComponent {
  private _formBuilder = inject(FormBuilder);
  private _authGateway = inject(AuthenticationGateway);
  private _router = inject(Router);

  loginForm: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required]],
  });

  login(): void {
    const {
      value: { name },
    } = this.loginForm;

    this._authGateway.login({ name });
    this._router.navigate([RoutePaths.default]);
  }
}
