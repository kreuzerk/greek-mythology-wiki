import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GmIconsModule, GmIconsRegistry} from 'ng-greek-mythology-icons';

import { AchillesRoutingModule } from './achilles-routing.module';
import { AchillesComponent } from './achilles.component';
import {gmIconsAchilles} from 'greek-mythology-icons';

@NgModule({
  declarations: [AchillesComponent],
  imports: [
    CommonModule,
    AchillesRoutingModule,
    GmIconsModule
  ]
})
export class AchillesModule {

  constructor(private gmIconRegistry: GmIconsRegistry) {
    gmIconRegistry.registerIcons([gmIconsAchilles]);
  }
}
