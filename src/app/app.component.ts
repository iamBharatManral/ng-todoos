import { Component } from '@angular/core';
import {TodoList} from "./core/TodoList";
import {TodoItem} from "./core/TodoItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Bob", [
    new TodoItem("Go for run", true),
    new TodoItem("Get flowers", false),
    new TodoItem("Collect tickets", false)
  ])
  get username(): string{
    return this.list.user
  }
  get itemCount(): number{
    return this.list.items.filter(item => !item.complete).length
  }
}
