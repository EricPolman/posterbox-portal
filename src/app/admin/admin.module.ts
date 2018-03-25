import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import {Route} from '../core/route.service';
import {SharedModule} from '../shared/shared.module';
import {AdministratorGuard} from '../core/authentication/administrator.guard';
import {AdminService} from './admin.service';

const routes: Routes = Route.withShell([
  { path: 'admin', canActivate: [AdministratorGuard], component: AdminComponent }
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    AdminComponent
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
