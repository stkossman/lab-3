# Homework/Lab 3

This is the third task from my university React course.
What needed to be done:

_Build a small To-Do list application in React. The app should allow users to add new tasks,
mark them as complete, and remove them + The Component Tree & Data Flow diagram in the README.md._ 

## Component Tree

```plaintext
│
└── TodoList
│ State: [todos: Todo[]]
│ Props: none
│
├── AddTodoForm
│ │ State: [inputValue: string]
│ │ Props: { onAddTodo: (task: string, description?:string) => void }
│ │ ↑ Sends new task data to parent via onAddTodo callback
│ │
│ └── [Input Field + Add Button]
│ │ Input manages local inputValue state
│ └── Button triggers form submission
│
└── TodoItem (multiple instances)
│ State: [isCompleted: boolean]
│ Props: { todo: Todo, onDelete: (id: string) => void }
│ ↑ Sends delete requests to parent via onDelete callback
│
├── [Checkbox]
│ └── Toggles local isCompleted state
│
├── [Task Text]
│ └── Visual styling based on isCompleted state
│
└── [Delete Button]
└── Triggers onDelete callback with todo.id
```

## Data Flow

### Props
- App -> TodoList: No props
- TodoList -> AddTodoForm: `onAddTodo` callback function
- TodoList -> TodoItem: `todo` object and `onDelete` callback function

### Callbacks
- AddTodoForm -> TodoList: New task string via `onAddTodo(task)`
- TodoItem -> TodoList: Delete request via `onDelete(id)`

### State Colocation
- TodoList: Manages the list of todos (`todos: Todo[]`)
- TodoItem: Manages its own completion status (`isCompleted: boolean`)
- AddTodoForm: Manages input field value (`inputValue: string`)
- App: No state - serves as composition root only