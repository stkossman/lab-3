import type { TodoHeaderProps } from "../../../types/todo.ts";

const TodoHeader: React.FC<TodoHeaderProps> = ({ title = "ToDo List" }) => {
  return (
    <h1 className="text-2xl font-bold text-black mb-8 text-center">{title}</h1>
  );
};

export default TodoHeader;
