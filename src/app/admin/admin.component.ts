import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

const apiUrl = 'https://api.posterbox.polman.tech/files';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  filesToUpload: Array<File> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  upload() {
    const formData: any = new FormData();
    const fileArray: Array<File> = this.filesToUpload;
    console.log(fileArray);

    for (let i = 0; i < fileArray.length; i++) {
      formData.append('uploads[]', fileArray[i], fileArray[i]['name']);
    }

    this.http.post(apiUrl, formData)
      .map((files: Response) => files.json())
      .subscribe(files => console.log('files', files));
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
