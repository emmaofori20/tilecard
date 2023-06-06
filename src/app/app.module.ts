import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoCardComponent } from './Components/todo-card/todo-card.component';
import { PiTileCardComponent } from './Components/pi-tile-card/pi-tile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoCardComponent,
    PiTileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
