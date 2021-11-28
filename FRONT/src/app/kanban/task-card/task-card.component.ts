import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() card!:Card;

  // title:string = "New card";
  // description: string = "New description";

  constructor() { }

  ngOnInit(): void {
  }

  // onNextColumn(){

  // }

}
