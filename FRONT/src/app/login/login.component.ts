import { KanbanService } from './../services/kanban.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  }

  onLoginKanban(){
    const userCredentials = this.loginForm.value
    this.kanbanService.getToken(userCredentials.login,userCredentials.senha).subscribe( (token) => {
      if (token) {
        this.kanbanService.setAuth(token)
        this.router.navigate(['kanban-board']);
      }
      else {
        console.log("Login ou Senha errados")
      }
    })
  }

}
