// src/app/models/project.model.ts
// src/app/models/task.model.ts
export interface Task {
    id: number;
    title: string;
    description: string;
    assignedTo: string;
    deadline: Date;
    
    status: 'pending' | 'in-progress' | 'completed';
    projectId: number;
  }
  
export interface Project {
    id: number;
    name: string;
    description: string;
    status: 'ongoing' | 'completed';
    startDate: string;
    endDate: string;
    tasks: Task[];
  }
  