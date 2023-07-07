import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "./buttons/button.module";
import {InputsModule} from "./inputs/inputs.module";
import {LayoutsModule} from "./layouts/layouts.module";
import {CardsModule} from "./cards/cards.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputsModule,
    LayoutsModule,
    CardsModule,
  ]
})
export class ComponentsModule { }
