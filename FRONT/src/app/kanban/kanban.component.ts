import { KanbanService } from './../services/kanban.service';
import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  cards!: Card[]
  cardsTODO!: Card[]
  cardsDOING!: Card[]
  cardsDONE!: Card[]

  
  constructor(
    private kanbanService: KanbanService
  ) { }

  ngOnInit(): void {
    
    this.kanbanService.getToken('','').subscribe( token => {
      this.kanbanService.setAuth(token)
      console.log(token)
    });

    this.kanbanService.getCardsfromServer().subscribe((data) => {
      this.cards = data
      this.cardsInColumns()
    });

    this.kanbanService.cardsChanged.subscribe(() => {
      this.getCards()
    })

  }

  cardsInColumns(){
    this.cardsTODO = this.cards.filter( (p) => {return p.lista === 'ToDo'})
    this.cardsDOING = this.cards.filter( (p) => {return p.lista === 'Doing'})
    this.cardsDONE = this.cards.filter( (p) => {return p.lista === 'Done'})
  }

  getCards(){
    this.kanbanService.getCardsfromServer().subscribe(data => {
      this.cards = data
      this.cardsInColumns()
    })
  }

  createCard(){
    console.log("teste 1")

    this.kanbanService.createCardOnServer("teste","Funcionou","ToDo").subscribe( ()=>{
      this.kanbanService.getCardsfromServer().subscribe((data) => {
        this.cards = data
        this.cardsInColumns()
      })
    } )
  }

}
