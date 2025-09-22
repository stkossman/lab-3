import type { TodoStatsProps } from "../../../types/todo.ts";

const TodoStats: React.FC<TodoStatsProps> = ({ count }) => {
    return (
        <div className="mt-4 text-center">
            <p className="text-sm text-neutral-600">
                {count} task{count !== 1 ? "s" : ""} total
            </p>
        </div>
    );
};

export default TodoStats;