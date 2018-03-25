import {Injectable} from '@angular/core';
import {AuthenticationService} from '../core/authentication/authentication.service';
import {Poster, PosterPost} from './poster.model';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostersService {
  posters = new Array<Poster>();
  postersLoaded: boolean;


  constructor(private authService: AuthenticationService, private httpClient: HttpClient) {

  }

  randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  _filterPosters(tag: string, searchQuery: string) {
    let result = this.posters.slice();
    if (tag.length > 0) {
      result = result.filter((poster: Poster) => {
        if (poster.tags.includes(tag)) {
          return true;
        } else {
          return false;
        }
      });
    }
    if (searchQuery.length > 0) {
      result = result.filter((poster: Poster) => {
        if (JSON.stringify(poster).toLowerCase().includes(searchQuery.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
    }
    return result;
  }

  getPosters(tag: string, searchQuery: string) {
    if (this.postersLoaded) {
      return new Promise<Poster[]>((resolve, reject) => resolve(this._filterPosters(tag, searchQuery)));
    } else {
      const headers = new HttpHeaders({'x-access-token': this.authService.credentials.token});

      return this.httpClient.get(environment.apiUrl + '/posters', {headers: headers}).toPromise()
        .then((posters: PosterPost[]) => {
          this.posters = [];
          posters.forEach((poster) => {
            const p = new Poster();
            p.title = poster.title;
            p.customerId = poster.customerId;
            p.thumbnail = poster.thumbnail;
            p.tags = JSON.parse(poster.tags);
            p.files = JSON.parse(poster.files);
            this.posters.push(p);
          });

          this.postersLoaded = true;
          return this._filterPosters(tag, searchQuery);
        });
    }
  }
}
