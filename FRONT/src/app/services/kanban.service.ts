
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../models/card.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  baseUrl = "http://localhost:5000/cards/"
  loginUrl = "http://localhost:5000/login/"

  private cards: Card[] = [
    new Card('1',"Task1","Desc1","ToDo"),
    new Card('2',"Task2","Desc2","ToDo"),
    new Card('3',"Task3","Desc3","Done"),
    new Card('4',"Task4","Desc4","ToDo"),
  ];

  // private token!: string;
  private authorization: string = localStorage.getItem('auth') || '';
  private headers = {headers: {
    'Content-Type': 'application/json',
    Authorization: this.authorization,
  }} ;

  cardsChanged = new Subject();
  isLogged = new Subject();

  constructor(
    private http: HttpClient
  ) {}

  getCards(){
    return this.cards
  };

  getToken(login: string,password:string) {
    // return this.http.post(this.loginUrl, { login: "letscode", password: "lets@123" });
    const body = { login: login, senha: password }
    const options = { headers: { 'Content-Type': 'application/json' }}
    const token = this.http.post<string>(this.loginUrl, body, options);
    return token
  }

  setAuth(token: string) {
    this.authorization = 'Bearer ' + token;
    localStorage.setItem('auth', this.authorization);
    this.isLogged.next(true);
  }

  getCardsfromServer(){
    // const options = { headers: this.header };
    return this.http.get<Card[]>(this.baseUrl,this.headers)
  }

  createCardOnServer(titulo:string,conteudo:string,lista:string) {
    // const options = { headers: this.header };
    return this.http.post<Card>(this.baseUrl, {titulo:titulo,conteudo:conteudo,lista:lista},this.headers);
  }

  deleteCardOnServer(id:string){
    return this.http.delete<Card>(`${this.baseUrl}${id}`,this.headers)
  }

  updateCardOnServer(card:Card){
    return this.http.put<Card>(`${this.baseUrl}${card.id}`,card,this.headers)
  }

}
