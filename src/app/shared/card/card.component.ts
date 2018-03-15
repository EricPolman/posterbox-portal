import {Component, Input, OnInit} from '@angular/core';
import {Poster} from '../poster.model';
import {Lightbox} from 'angular2-lightbox';

@Component({
  selector: '[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('data') data: Poster;

  private albums: Array<any> = [];

  constructor(private lightBox: Lightbox) {

  }

  ngOnInit() {
    const album = { src: this.data.files[0].path };
    this.albums.push(album);
  }

  open(): void {
    // open lightbox
    console.log(this.lightBoxConfig);

    this.lightBox.open(this.albums, 0);
  }
}
