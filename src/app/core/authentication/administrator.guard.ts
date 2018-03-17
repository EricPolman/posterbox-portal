import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AdministratorGuard implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  canActivate(): boolean {
    if (this.authenticationService.credentials.role === 'admin') {
      return true;
    }

    console.log('Not authenticated, redirecting...');
    this.router.navigate(['/overview'], { replaceUrl: true });
    return false;
  }
}
