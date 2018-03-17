import {Component, ElementRef, OnInit, ViewChild, ViewRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchField') searchField: ElementRef;
  tag = '';
  isAdmin = false;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.isAdmin = this.authService.credentials.role === 'admin';
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
