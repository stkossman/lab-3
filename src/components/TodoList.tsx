import { useState } from "react";
import type { Todo } from "../types/todo";
import AddTodoForm from "./AddToDoForm";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string, description?: string) => {
    const newTodo: Todo = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      task,
      description,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-neutral-50 rounded-xl p-6 shadow-lg">
      <h1 className="text-2xl font-bold text-black mb-8 text-center">
        ToDo List
      </h1>

      <AddTodoForm onAddTodo={handleAddTodo} />

      <div className="space-y-2">
        {todos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-neutral-500 text-lg">No tasks yet.</p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
          ))
        )}
      </div>

      {todos.length > 0 && (
        <div className="mt-4 text-center">
          <p className="text-sm text-neutral-600">
            {todos.length} task{todos.length !== 1 ? "s" : ""} total
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
