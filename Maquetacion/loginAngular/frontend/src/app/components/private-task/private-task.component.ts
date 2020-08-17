import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-private-task',
  templateUrl: './private-task.component.html',
  styleUrls: ['./private-task.component.css']
})
export class PrivateTaskComponent implements OnInit {
  tasks = [];
  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.tasksService.getPrivateTasks()
      .subscribe(res=>{
        console.log(res);
        this.tasks = res;
      },
      err => {
        console.log(err);
      })
  }

}
