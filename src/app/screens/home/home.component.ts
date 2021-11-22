import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { routerPath } from 'src/app/common/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {

  }

  logout() {
    this.authenticationService.logout$().pipe(
      tap(() => {
        this.router.navigate([routerPath.login]);
      }),
    ).subscribe()
  }
}