import {Injectable} from '@angular/core';
import {AuthenticationService} from '../core/authentication/authentication.service';
import {Poster} from './poster.model';

@Injectable()
export class PostersService {
  posters: Array<Poster> = [
    {title: 'Personeel gezocht', thumbnail: 'http://ericpolman.com/files/posterboxtemp/personeelgezocht.png',
      tags: ['Overig'],
      files: [
        {type: 'png', path: 'http://ericpolman.com/files/posterboxtemp/personeelgezocht.png'},
        {type: 'pdf', path: 'http://ericpolman.com/files/posterboxtemp/personeelgezocht.pdf'}]},
    {title: 'It Giet Oan', thumbnail: 'http://ericpolman.com/files/posterboxtemp/poster_gietervrijdag.png',
      tags: ['Vrijdag', 'Actie', 'Weekdag'],
      files: [
        {type: 'png', path: 'http://ericpolman.com/files/posterboxtemp/poster_gietervrijdag.png'}]},
    {title: '11e van de 11e', thumbnail: 'http://ericpolman.com/files/posterboxtemp/11vande11.png',
      tags: ['Carnaval', 'Evenement'],
      files: [
        {type: 'png', path: 'http://ericpolman.com/files/posterboxtemp/11vande11.png'}]},
    {title: 'TimeWarp', thumbnail: 'http://ericpolman.com/files/posterboxtemp/poster_timewarp.png',
      tags: ['Zaterdag', 'Actie', 'Weekdag'],
      files: [
        {type: 'png', path: 'http://ericpolman.com/files/posterboxtemp/poster_timewarp.png'}]}
  ];


  constructor(private authService: AuthenticationService) {

  }

  getPosters(tag: string, searchQuery: string) {
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
        if (JSON.stringify(poster).includes(searchQuery)) {
          return true;
        } else {
          return false;
        }
      });
    }
    return result;
  }
}
