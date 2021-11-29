import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { KanbanService } from 'src/app/services/kanban.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() card!:Card;

  // title:string = "New card";
  // description: string = "New description";

  constructor(
    private kanbanService: KanbanService
  ) { }

  ngOnInit(): void {
  }

  deleteCard(){
    this.kanbanService.deleteCardOnServer(this.card.id).subscribe(p => {
      this.kanbanService.cardsChanged.next(p)
    })
  }

  forwardCard(){
    if(this.card.lista === "ToDo"){
      this.card.lista = "Doing"
    }else if (this.card.lista === "Doing") {
      this.card.lista = "Done"
    }
    this.kanbanService.updateCardOnServer(this.card).subscribe(p => {
      this.kanbanService.cardsChanged.next(p)
    })
  }

  backwardCard(){
    if(this.card.lista === "Doing"){
      this.card.lista = "ToDo"
    }else if (this.card.lista === "Done") {
      this.card.lista = "Doing"
    }
    this.kanbanService.updateCardOnServer(this.card).subscribe(p => {
      this.kanbanService.cardsChanged.next(p)
    })
  }

  // onNextColumn(){

  // }

}
