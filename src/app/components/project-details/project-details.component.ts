import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { TaskService } from '../../services/task.service';
import { Project } from '../../models/project.model';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;
  tasks: Task[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.loadProjectDetails(projectId);
    //this.loadTasks(projectId);
  }

  loadProjectDetails(id: string | null): void {
    // if (id) {
    //   this.projectService.getProjectById(id).subscribe((data: Project) => {
    //     this.project = data;
    //   });
    }
  }

  // loadTasks(projectId: string | null): void {
  //   if (projectId) {
  //     this.taskService.getTasksByProjectId(projectId).subscribe((data: Task[]) => {
  //       this.tasks = data;
  //     });
  //   } 
  // }

  // Add more methods as needed
//}
