import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VrPage } from './vr';

@NgModule({
  declarations: [
    VrPage,
  ],
  imports: [
    IonicPageModule.forChild(VrPage),
  ],
})
export class VrPageModule {}
