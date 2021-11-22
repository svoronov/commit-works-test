import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { routerPath } from 'src/app/common/constants';
import { AuthenticationService } from 'src/app/services/authentication.service';

const BACKGROUND_IDX_KEY = 'backgroundIdx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  routerPath = routerPath;

  usernameVisited = false;
  passwordVisited = false;

  background = 1;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  get isUsernameValid(): boolean {
    return !this.usernameVisited || Boolean(this.username);
  }

  get isPasswordValid(): boolean {
    return !this.passwordVisited || Boolean(this.password);
  }

  get isLoginEnabled(): boolean {
    return Boolean(this.username) && Boolean(this.password);
  }

  ngOnInit(): void {
    const key = sessionStorage.getItem(BACKGROUND_IDX_KEY);
    if (key) {
      this.background = parseInt(key) % 2 + 1;
    }
    sessionStorage.setItem(BACKGROUND_IDX_KEY, String(this.background));
  }

  login(): void {
    this.authenticationService.login$(this.username, this.password)
      .pipe(
        tap(() => {
          this.router.navigate([routerPath.home]);
        }),
      )
      .subscribe()
  }
}