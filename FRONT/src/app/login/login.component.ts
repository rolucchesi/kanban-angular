import { KanbanService } from './../services/kanban.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, empty, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    login: new FormControl(),
    senha: new FormControl()
  });



  constructor(
    private kanbanService: KanbanService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.kanbanService.clearAuth()
    
  }

  onLoginKanban(){

    // this.kanbanService.getToken(this.loginForm.value.login,this.loginForm.value.senha).pipe(
    //   catchError(error => {
    //     console.log("Erro que aconteceu:")
    //     this.error$.next(true)
    //     return empty()
    //   })
    // )

    const userCredentials = this.loginForm.value
    this.kanbanService.getToken(userCredentials.login,userCredentials.senha).subscribe( (token) => {
      if (token) {
        this.kanbanService.setAuth(token)
        this.router.navigate(['kanban-board']);
      }
      else {
        alert("Login ou senha errados")
      }
    })
  }

}
