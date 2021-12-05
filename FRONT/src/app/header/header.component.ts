import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { KanbanService } from '../services/kanban.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private kanbanService: KanbanService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigateByUrl('/login');
    this.kanbanService.clearAuth();
  }

}
