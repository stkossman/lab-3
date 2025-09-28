# Homework/Lab 3

This is the third task from my university React course.
What needed to be done:

_Build a small To-Do list application in React. The app should allow users to add new tasks,
mark them as complete, and remove them + The Component Tree & Data Flow diagram in the README.md._

## Component Tree

```mermaid
graph TD;
    App["App
    Root component
    Renders layout structure"]

    Footer["Footer
    Static component"]

    TodoListWrapper["TodoListWrapper
    State: todos[]
    Main container managing all todo operations"]

    TodoHeader["TodoHeader
    Props: title
    Displays app title"]

    AddTodoForm["AddTodoForm
    Props: onAddTodo (callback)
    State: task, description
    Handles form submission & input validation"]

    TodoEmpty["TodoEmpty
    Static component
    Shown when no todos"]

    TodoList["TodoList
    Props: todos[], onDelete (callback)
    Maps over todos array"]

    TodoItem["TodoItem
    Props: todo object, onDelete (callback)
    State: isCompleted
    Manages completion toggle & deletion"]

    TodoStats["TodoStats
    Props: count
    Shows total task count"]

    %% Root level
    App --> TodoListWrapper
    App --> Footer

    %% TodoListWrapper children
    TodoListWrapper --> TodoHeader
    TodoListWrapper --> AddTodoForm
    TodoListWrapper --> TodoEmpty
    TodoListWrapper --> TodoList
    TodoListWrapper --> TodoStats

    %% AddTodoForm - no children (HTML elements only)

    %% TodoList children
    TodoList --> TodoItem

    %% TodoItem - no children (HTML elements only)

    %% Data flow annotations
    AddTodoForm -.->|"onAddTodo(task, description)"| TodoListWrapper
    TodoItem -.->|"onDelete(todo.id)"| TodoList
    TodoList -.->|"onDelete(todo.id)"| TodoListWrapper

    %% Conditional rendering
    TodoListWrapper -.->|"todos.length === 0"| TodoEmpty
    TodoListWrapper -.->|"todos.length > 0"| TodoList
    TodoListWrapper -.->|"todos.length > 0"| TodoStats
```

## Data Flow

### State Colocation

- TodoList: Manages the list of todos (`todos: Todo[]`)
- TodoItem: Manages its own completion status (`isCompleted: boolean`)
- AddTodoForm: Manages input field value (`inputValue: string`)
- App: No state - serves as composition root only
