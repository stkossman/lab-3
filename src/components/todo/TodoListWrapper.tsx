import { useState } from "react";
import type { Todo } from "../../types/todo.ts";
import AddTodoForm from "./form/AddToDoForm.tsx";
import TodoList from "./list/TodoList.tsx";
import TodoEmpty from "./list/TodoEmpty.tsx";
import TodoStats from "./layout/TodoStats.tsx";
import TodoHeader from "./layout/TodoHeader.tsx";

const TodoListWrapper: React.FC = () => {
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
            <TodoHeader title="Kossman's Todo List"/>

            <AddTodoForm onAddTodo={handleAddTodo} />

            {todos.length === 0 ? (
                <TodoEmpty />
            ) : (
                <>
                    <TodoList todos={todos} onDelete={handleDeleteTodo} />
                    <TodoStats count={todos.length} />
                </>
            )}
        </div>
    );
};

export default TodoListWrapper;
