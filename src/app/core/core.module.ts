import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md/index';
import {AuthenticationGuard} from './authentication/authentication.guard';
import {AuthenticationService} from './authentication/authentication.service';
import {AdministratorGuard} from './authentication/administrator.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule
  ],
  declarations: [
    HeaderComponent,
    ShellComponent
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    AdministratorGuard
  ]
})
export class CoreModule { }
