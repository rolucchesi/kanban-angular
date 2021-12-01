import { KanbanService } from './services/kanban.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// kanbanService:KanbanService

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  // constructor(
  //   private kanbanService: KanbanService,
  //   // public isLoggedIn:boolean
  // ) { }

  // ngOnInit(): void {
    
    

  // }
  
  canActivate(
    // isLoggedIn:boolean,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return true;
    // Falta implementar lógica de pegar se status está logado
  }
  
}
