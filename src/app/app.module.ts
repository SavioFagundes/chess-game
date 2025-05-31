import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessBoard } from './chess-logic/chess-board';
import { ChessBoardComponent } from './modules/chess-board/chess-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
