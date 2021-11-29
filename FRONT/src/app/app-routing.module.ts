import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { KanbanComponent } from './kanban/kanban.component';

const routes:Routes = [
  {path: '',redirectTo:'kanban-board',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'kanban-board',component:KanbanComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
