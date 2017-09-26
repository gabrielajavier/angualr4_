import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7ONqmJKpGh6AHpYwFWFuOKTTibxFANGE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
