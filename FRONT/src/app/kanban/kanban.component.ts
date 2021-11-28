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
    this.cards = this.kanbanService.getCards()
    // console.log(this.cards[0].lista === 'todo')
    this.cardsTODO = this.cards.filter( (p) => {return p.lista === 'todo'})
    this.cardsDOING = this.cards.filter( (p) => {return p.lista === 'doing'})
    this.cardsDONE = this.cards.filter( (p) => {return p.lista === 'done'})
    console.log(this.kanbanService.validateCredentials("",""))
    // .subscribe( data => {this.cards = data}) //

  }

  cardsInColumns(){
    this.cardsTODO = this.cards.filter( (p) => {return p.lista === 'todo'})
    this.cardsDOING = this.cards.filter( (p) => {return p.lista === 'doing'})
    this.cardsDONE = this.cards.filter( (p) => {return p.lista === 'done'})
  }

  getCards(){
    this.kanbanService.getCardsfromServer().subscribe(data => {
      this.cards = data
      this.cardsInColumns()
    })
  }

  createCard(){
    console.log("teste 1")

    this.kanbanService.createCardOnServer("teste","Funcionou","todo").subscribe( ()=>{
      this.kanbanService.getCardsfromServer().subscribe(data => {
        this.cards = data
        this.cardsInColumns()
      })
    } )
  }

}
