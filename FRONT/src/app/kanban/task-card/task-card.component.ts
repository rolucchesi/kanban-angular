import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/app/models/card.model';
import { KanbanService } from 'src/app/services/kanban.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() card!:Card;

  cardForm: FormGroup = new FormGroup({
    titulo: new FormControl(),
    conteudo: new FormControl()
  });

  
  showForm!:boolean;

  // title:string = "New card";
  // description: string = "New description";

  constructor(
    private kanbanService: KanbanService
  ) { }

  ngOnInit(): void {
    this.showForm = this.card.lista === 'Edit';
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

  createCard(){
    // this.showForm = false;
    const newLista = this.card.lista === 'Edit' ? 'ToDo' : this.card.lista;
    this.kanbanService.updateCardOnServer(new Card(this.card.id,this.cardForm.value.titulo,this.cardForm.value.conteudo,newLista)).subscribe(p => {
      this.kanbanService.cardsChanged.next(p)
    })
  }

  editCard(){
    this.showForm = true;
  }

  cancelEditCard(){
    this.showForm = false;
  }

  // saveCard(){
  //   this.kanbanService.createCardOnServer("teste","Funcionou","ToDo").subscribe( ()=>{
  //     this.kanbanService.getCardsfromServer().subscribe((data) => {
  //       this.cards = data
  //       this.cardsInColumns()
  //     })
  //   } )
  // }

  // onNextColumn(){

  // }

}
