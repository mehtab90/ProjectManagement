import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { TaskManagementComponent } from './components/task-management/task-management.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Redirect to Dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'task-management', component: TaskManagementComponent },
  { path: 'report', component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
  