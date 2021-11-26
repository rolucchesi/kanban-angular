import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { ColumnNewComponent } from './column-new/column-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskCardComponent,
    ColumnNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
