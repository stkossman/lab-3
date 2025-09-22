export interface Todo {
  id: string;
  task: string;
  description?: string;
}

export interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
}

export interface TodoStatsProps {
  count: number;
}

export interface TodoHeaderProps {
  title?: string;
}

export interface AddTodoFormProps {
  onAddTodo: (task: string, description?: string) => void;
}
