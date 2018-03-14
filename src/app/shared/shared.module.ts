import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from './card/card.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md/index';


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports: [
    CardComponent,
    MDBBootstrapModule
  ],
  declarations: [
    CardComponent
  ],
  providers: [
  ]
})
export class SharedModule {

  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
