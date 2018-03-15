import { Component, OnInit } from '@angular/core';
import {Poster} from '../shared/poster.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
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

  filteredPosters: Array<Poster>;
  filteredOn = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.hasOwnProperty('tag')) {
      this.filteredOn = this.route.snapshot.queryParams['tag'];
      this.filteredPosters = this.posters.filter((poster: Poster) => {
        if (poster.tags.includes(this.filteredOn)) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      this.filteredPosters = this.posters.slice();
      this.filteredOn = '';
    }

    this.route.queryParams.subscribe((params: Params) => {
      if (params.hasOwnProperty('tag')) {
        this.filteredOn = params['tag'];
        this.filteredPosters = this.posters.filter((poster: Poster) => {
          if (poster.tags.includes(this.filteredOn)) {
            return true;
          } else {
            return false;
          }
        });
      } else {
        this.filteredPosters = this.posters.slice();
        this.filteredOn = '';
      }
    });
  }

  resetFilter() {
    this.router.navigate([], {queryParams:{}});
  }

}
