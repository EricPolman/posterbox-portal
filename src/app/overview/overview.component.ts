import { Component, OnInit } from '@angular/core';
import {Poster} from '../shared/poster.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  posters = new Array<Poster>();


  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 10; ++i) {
      const poster = new Poster();
      poster.title = 'Kattenvoer agenda';
      poster.thumbnail = 'http://placehold.it/210x297';
      poster.tags = ['Woensdag', 'Kattenvoer', 'Evenement'];
      poster.files.push({type: 'png', path: 'http://placehold.it/2100x2970'});
      this.posters.push(poster);
    }
  }

}
