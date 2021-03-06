import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {OverviewComponent} from './overview.component';
import {Route} from '../core/route.service';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent }
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    OverviewComponent
  ],
  providers: [
  ]
})
export class OverviewModule { }
