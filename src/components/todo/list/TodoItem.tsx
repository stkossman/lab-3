import { useState } from "react";
import type { TodoItemProps } from "../../../types/todo.ts";

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleToggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200 shadow-sm mb-2">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleToggleComplete}
          className="w-5 h-5 rounded border-2 text-black border-neutral-300 focus:ring-black focus:outline-dotted focus:ring-2"
        />
        <span
          className={`text-base ${
            isCompleted ? "line-through text-neutral-500" : "text-neutral-800"
          }`}
        >
          {todo.task}
        </span>
        {todo.description && (
          <p
            className={`ml-8 text-sm ${isCompleted ? "line-through text-neutral-400" : "text-neutral-600"}`}
          >
            {todo.description}
          </p>
        )}
      </div>
      <button
        onClick={handleDelete}
        className="text-black hover:text-neutral-600 hover:bg-neutral-200 rounded-full transition-colors duration-200"
        aria-label="Delete task"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
