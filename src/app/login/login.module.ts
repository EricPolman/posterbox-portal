import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from 'angular-bootstrap-md/index';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
