import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TextBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
