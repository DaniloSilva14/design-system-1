import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSourceComponent } from './components/data-source/data-source.component';
import { DefaultComponent } from './components/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    DataSourceComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
