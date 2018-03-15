import {Component, Input, OnInit} from '@angular/core';
import {Poster} from '../poster.model';

@Component({
  selector: '[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('data') data: Poster;

  constructor() { }

  ngOnInit() {
  }

}
