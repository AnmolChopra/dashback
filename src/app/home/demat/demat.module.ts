import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DematPageRoutingModule } from './demat-routing.module';

import { DematPage } from './demat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DematPageRoutingModule
  ],
  declarations: [DematPage]
})
export class DematPageModule {}
