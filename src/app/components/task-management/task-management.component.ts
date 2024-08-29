import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      assignedTo: ['', Validators.required],
      deadline: ['', Validators.required],
      projectId: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  submitTask(): void {
    if (this.taskForm.valid) {
      // this.taskService.createTask(this.taskForm.value).subscribe(response => {
      //   console.log('Task created successfully!', response);
      // });
    }
  }
}
