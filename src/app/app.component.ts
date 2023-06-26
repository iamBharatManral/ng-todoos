import { Component } from '@angular/core';
import {TodoList} from "./model/TodoList";
import {TodoItem} from "./model/TodoItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Bharat", [
    new TodoItem("Go for run", true),
    new TodoItem("Get flowers", false),
    new TodoItem("Collect tickets", false)
  ])
  showCompleted = false;
  get username(): string{
    return this.list.user
  }
  get itemCount(): number{
    return this.list.items.filter(item => !item.complete).length
  }
  get items(): readonly TodoItem[] {
    if(this.showCompleted){
      return this.list.items
    }
    return this.list.items.filter(item => !item.complete)
  }

  add(task: string){
    this.list.addItem(task)
  }
}
