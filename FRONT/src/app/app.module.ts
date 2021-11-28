import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskCardComponent } from './kanban/task-card/task-card.component';
import { ColumnTodoComponent } from './kanban/column-todo/column-todo.component';
import { ColumnDoingComponent } from './kanban/column-doing/column-doing.component';
import { ColumnDoneComponent } from './kanban/column-done/column-done.component';
import { HeaderComponent } from './header/header.component';
import { KanbanComponent } from './kanban/kanban.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskCardComponent,
    ColumnTodoComponent,
    ColumnDoingComponent,
    ColumnDoneComponent,
    HeaderComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
