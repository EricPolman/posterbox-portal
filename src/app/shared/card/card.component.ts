import {Component, Input, OnInit} from '@angular/core';
import {Poster} from '../poster.model';
import {Lightbox} from 'angular2-lightbox';
import {Router} from '@angular/router';

@Component({
  selector: '[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('data') data: Poster;

  private albums: Array<any> = [];

  constructor(private lightBox: Lightbox, private router: Router) {

  }

  ngOnInit() {
    const album = { src: this.data.files[0].path };
    this.albums.push(album);
  }

  open(): void {
    // open lightbox
    this.lightBox.open(this.albums, 0);
  }

  filterOnTag(tag: string) {
    this.router.navigate([], {queryParams: {tag: tag}});
  }
}
