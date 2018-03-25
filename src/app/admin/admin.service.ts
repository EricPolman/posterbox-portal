import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthenticationService} from '../core/authentication/authentication.service';

@Injectable()
export class AdminService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  getUsers() {
    const headers = new HttpHeaders({'x-access-token': this.authService.credentials.token});
    return this.httpClient.get(environment.apiUrl + '/users', {headers: headers}).toPromise();
  }
}
