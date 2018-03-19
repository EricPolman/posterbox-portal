import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Credentials, LoginContext } from './authentication.service';

export class MockAuthenticationService {

  credentials: Credentials | null = {
    emailAddress: 'test',
    role: 'admin',
    token: '123'
  };

  login(context: LoginContext): Observable<Credentials> {
    return of({
      emailAddress: context.emailAddress,
      role: 'admin',
      token: '123456'
    });
  }

  logout(): Observable<boolean> {
    this.credentials = null;
    return of(true);
  }

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

}
