import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SingleSignOnComponent } from './single-sign-on/single-sign-on.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    SingleSignOnComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ]
})
export class AuthenticationModule { }
