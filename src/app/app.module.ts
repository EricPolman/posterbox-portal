import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OverviewModule } from './overview/overview.module';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './login/login.module';

import { LightboxModule } from 'angular2-lightbox';
import {PostersService} from './shared/posters.service';
import {AdminModule} from './admin/admin.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

const routes: Routes = [
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes),
    LoginModule,
    AdminModule,
    OverviewModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    MDBBootstrapModule.forRoot(),
    LightboxModule
  ],
  exports: [RouterModule],
  providers: [PostersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
