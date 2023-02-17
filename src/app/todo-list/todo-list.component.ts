import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [
    { label: 'Tache 1', done: false },
    { label: 'Tache 2', done: true },
    { label: 'Tache 3', done: false },
  ];
  constructor() {}

  ngOnInit() {}
}
