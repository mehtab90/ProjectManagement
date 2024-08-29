import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  expandedProjectId: number | null = null; // Tracks the currently expanded project
  selectedProjects: Set<number> = new Set<number>(); // Tracks selected projects

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });    
  }

  toggleProjectExpansion(projectId: number): void {
    this.expandedProjectId = this.expandedProjectId === projectId ? null : projectId;
  }

  toggleProjectSelection(projectId: number): void {
    if (this.selectedProjects.has(projectId)) {
      this.selectedProjects.delete(projectId);
    } else {
      this.selectedProjects.add(projectId);
    }
  }

  isProjectSelected(projectId: number): boolean {
    return this.selectedProjects.has(projectId);
  }

  allProjectsSelected(): boolean {
    return this.projects.length > 0 && this.selectedProjects.size === this.projects.length;
  }

  toggleSelectAll(event: any): void {
    if (event.target.checked) {
      this.projects.forEach(project => this.selectedProjects.add(project.id));
    } else {
      this.selectedProjects.clear();
    }
  }

  assignTask(task: any): void {
    // Logic to assign task to someone
    console.log('Assigning task:', task);
  }
  
  // Add more methods as needed
}
