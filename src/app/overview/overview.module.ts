import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {MDBBootstrapModule} from 'angular-bootstrap-md/index';
import {OverviewComponent} from './overview.component';
import {Route} from '../core/route.service';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent }
]);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MDBBootstrapModule
  ],
  exports: [RouterModule],
  declarations: [
    OverviewComponent
  ],
  providers: [
  ]
})
export class OverviewModule {

  constructor(@Optional() @SkipSelf() parentModule: OverviewModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
