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
  posters: Array<Poster>;
  tag = '';
  search = '';

  constructor(private route: ActivatedRoute, private router: Router, private postersService: PostersService) { }

  ngOnInit() {
    this.getPosters(this.route.snapshot.queryParams);

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
    this.posters = this.postersService.getPosters(this.tag, this.search);
  }

  resetFilter() {
    this.router.navigate([], {queryParams: {search: this.search}});
  }

}
