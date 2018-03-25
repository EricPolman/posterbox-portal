import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Credentials, LoginContext } from './authentication.service';
import {User} from '../../shared/user.model';

export class MockAuthenticationService {

  credentials: Credentials | null = {
    user: {
      id: 'test',
      email: 'test',
      role: 'admin',
      name: 'test'
    },
    token: '123'

  };

  login(context: LoginContext): Observable<Credentials> {
    return of({
      user: {
        id: 'test',
        email: context.emailAddress,
        role: 'admin',
        name: 'test'
      },
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
