import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { KanbanComponent } from './kanban/kanban.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes:Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'kanban-board',canActivate:[AuthGuardGuard],component:KanbanComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
