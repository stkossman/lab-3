import type { TodoListProps } from "../../../types/todo.ts";
import TodoItem from "./TodoItem.tsx";

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
    return (
        <div className="space-y-2">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default TodoList;