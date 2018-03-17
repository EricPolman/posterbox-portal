import {Component, ElementRef, OnInit, ViewChild, ViewRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchField') searchField: ElementRef;
  tag = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  search() {
    const query = this.searchField.nativeElement.value;
    this.route.queryParams.subscribe((params: Params) => {
      this.tag = params['tag'] ? params['tag'] : '';
    });

    this.router.navigate([], {queryParams: {search: query, tag: this.tag}});
  }

  clearSearch() {
    this.router.navigate([], {queryParams: {tag: this.tag}});
    this.searchField.nativeElement.value = '';
  }
}
