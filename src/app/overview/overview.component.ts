import { Component, OnInit } from '@angular/core';
import {Poster} from '../shared/poster.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PostersService} from '../shared/posters.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  posters: Poster[] = new Array<Poster>();
  tag = '';
  search = '';

  constructor(private route: ActivatedRoute, private router: Router, private postersService: PostersService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.getPosters(params);
    });
  }

  getPosters(params: Params) {
    if (params.hasOwnProperty('tag')) {
      this.tag = params['tag'];
    } else {
      this.tag = '';
    }
    if (params.hasOwnProperty('search')) {
      this.search = params['search'];
    } else {
      this.search = '';
    }
    this.postersService.getPosters(this.tag, this.search).then((posters) => {
      this.posters = posters;
    });
  }

  resetFilter() {
    this.router.navigate([], {queryParams: {search: this.search}});
  }

}
