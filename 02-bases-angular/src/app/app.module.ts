import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { SuperHeroesModule } from './super-heroes/super-heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    SuperHeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }