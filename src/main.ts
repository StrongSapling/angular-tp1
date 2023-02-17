import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TodoListComponent } from './app/todo-list/todo-list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,TodoListComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-todo-list></app-todo-list>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
