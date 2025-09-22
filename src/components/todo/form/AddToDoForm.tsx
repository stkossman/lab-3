import { useState } from "react";
import type { AddTodoFormProps } from "../../../types/todo.ts";

const AddToDoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTodo(task.trim(), description.trim());
      setTask("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task title..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add description (optional)..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        rows={3}
      />
      <button
        type="submit"
        disabled={!task.trim()}
        className="w-full px-6 py-3 bg-black text-white rounded-lg font-medium
                            border border-transparent
                            transition-colors duration-200
                            disabled:bg-neutral-400 disabled:cursor-not-allowed
                            enabled:hover:bg-white enabled:hover:text-black enabled:hover:border-black"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddToDoForm;
