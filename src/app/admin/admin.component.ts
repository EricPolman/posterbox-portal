import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {AdminService} from './admin.service';
import {User} from '../shared/user.model';
import {environment} from '../../environments/environment';
import {AuthenticationService} from '../core/authentication/authentication.service';
import {Poster, PosterFile, PosterPost} from '../shared/poster.model';
import {isArray} from 'util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  pngToUpload: File;
  pdfToUpload: File;

  pngUploaded = false;
  pdfUploaded = false;

  users = new Array<User>();
  poster: PosterPost = new PosterPost();

  files = new Array<PosterFile>();

  @ViewChild('titleInput') titleInput: ElementRef;
  @ViewChild('tagsInput') tagsInput: ElementRef;
  @ViewChild('customerInput') customerInput: ElementRef;

  constructor(private http: HttpClient, private adminService: AdminService,
              private authService: AuthenticationService) { }

  ngOnInit() {
    this.adminService.getUsers().then((users: Array<User>) => {
      this.users = users;
    });
  }

  publishPoster() {
    this.poster.title = this.titleInput.nativeElement.value;
    this.poster.tags = JSON.stringify(this.tagsInput.nativeElement.value.split(','));
    this.poster.customerId = this.customerInput.nativeElement
      .options[this.customerInput.nativeElement.selectedIndex].value;

    if (isArray(this.files)) {
      this.poster.files = JSON.stringify(this.files);
    }

    const headers = new HttpHeaders({'x-access-token': this.authService.credentials.token});

    this.http.post(environment.apiUrl + '/posters', this.poster, {headers: headers})
      .subscribe(res => { console.log(res); });
  }

  uploadPng() {
    const formData: any = new FormData();
    const file: File = this.pngToUpload[0];

    formData.append('file', file);
    const headers = new HttpHeaders({'x-access-token': this.authService.credentials.token});
    console.log(file);
    this.http.post(environment.apiUrl + '/files', formData, {headers: headers})
      .subscribe(res => {
        console.log(res);
        this.files.push({type: 'png', path: res['link']});
        this.poster.thumbnail =  res['link'].slice(0, -4) + '.thumbnail.png';
        this.pngUploaded = true;
      });
  }

  uploadPdf() {
    const formData: any = new FormData();
    const file: File = this.pngToUpload[0];

    formData.append('file', file);
    const headers = new HttpHeaders({'x-access-token': this.authService.credentials.token});

    this.http.post(environment.apiUrl + '/files', formData, {headers: headers})
      .subscribe(res => {
        this.files.push({type: 'pdf', path: res['link']});
        this.pdfUploaded = true;
      });
  }

  pngFileChangeEvent(pngInput: any) {
    this.pngToUpload = <File>pngInput.target.files;
  }

  pdfFileChangeEvent(pdfInput: any) {
    this.pdfToUpload = <File>pdfInput.target.files;
  }
}
