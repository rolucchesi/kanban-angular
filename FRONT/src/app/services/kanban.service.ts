
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../models/card.model';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  baseUrl = "http://localhost:5000/cards"
  loginUrl = "http://localhost:5000/login/"

  private cards: Card[] = [
    new Card(1,"Task1","Desc1","todo"),
    new Card(2,"Task2","Desc2","todo"),
    new Card(3,"Task3","Desc3","done"),
    new Card(4,"Task4","Desc4","todo"),
  ];

  private token!: any

  constructor(
    private http: HttpClient
  ) { 
    this.http.post(this.loginUrl, { login: "letscode", password: "lets@123" }).subscribe(data => {
      this.token=data
    });
  }

  getCards(){
    return this.cards
  };

  getCard(id:number){
    return this.cards.find( p => p.id === id)
  }

  validateCredentials(login: string,password:string) {
    return this.http.post(this.loginUrl, { login: "letscode", password: "lets@123" });
  }

  getCardsfromServer(){
    return this.http.get<Card[]>(this.baseUrl,{
        headers: new HttpHeaders({
          Authorization: this.token
        })
      }
    )
  }

  createCardOnServer(titulo:string,conteudo:string,lista:string) {
    return this.http.post<Card>(this.loginUrl, {headers: new HttpHeaders({
      Authorization: this.token
    }),titulo:titulo,conteudo:conteudo,lista:lista});
  }

}
