export interface Task {
    id: number;
    name: string;
    description: string;
    assignedTo: string;
    deadline: Date;
    status: 'Pending' | 'In Progress' | 'Completed';
  }
  