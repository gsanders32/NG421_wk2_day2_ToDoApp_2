import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  title: string;
  todoTitle: string;
  todoId: number;
  todoList: Array<ITodo> = [
    { id: 1, title: 'Install Angular CLI', description: '' }
  ];

  constructor(private modalService: ModalService) { }

  getTodos() {
    return this.todoList;
  }

  addTodo(todoTitle: string): void {
    this.todoList.push({
      id: this.todoId,
      title: todoTitle,
      description: ''
    });

    // resets our todoTitle variable to an empty string and add 1 to id
    this.todoTitle = '';
    this.todoId++;
  }
  async deleteTodo(todo: any) {

    const result = await this.modalService.show();
    if (result === 'yes') {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
    }

  }
}
