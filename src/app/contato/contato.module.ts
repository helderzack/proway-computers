import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import  { NgxMaskModule } from 'ngx-mask';

// export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ContatoRoutingModule,
    NgxMaskModule.forRoot()
  ]
})
export class ContatoModule { }
