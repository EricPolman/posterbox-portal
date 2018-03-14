import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OverviewModule } from './overview/overview.module';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './login/login.module';

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
    OverviewModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
