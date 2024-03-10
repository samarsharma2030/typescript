// Define the Todo class
class Todo {
    doit: string[];

    constructor() {
        this.doit = [];
    }

    add(todo: string): void {
        this.doit.push(todo);
    }

    remove(indexofTodo: number): void {
        if(indexofTodo >= 0 && indexofTodo < this.doit.length){
            this.doit.splice(indexofTodo, 1);
        }
    }
    update(index: number, updateTodo: string): string | undefined {
        if (index >= 0 && index < this.doit.length){
            return this.doit[index] = updateTodo;
        }
    }
    getAll(): string[] {
        return this.doit.slice();
    }

    get(indexofTodo: number): string | null {
        if(indexofTodo >= 0 && indexofTodo < this.doit.length){
            return this.doit[indexofTodo];
        } else {
            return null;
        }
    }

    clear(): void {
        this.doit = [];
    }
}

// Create an instance of the Todo class
const myTodoList = new Todo();

// Add some todo items
myTodoList.add("Do laundry");
myTodoList.add("Buy groceries");

// Get all todo items
const allTodos = myTodoList.getAll();
console.log("All todo items:", allTodos);

// Update a todo item
myTodoList.update(0, "Fold clothes");

// Get a specific todo item
const todoAtIndex1 = myTodoList.get(1);
console.log("Todo at index 1:", todoAtIndex1);

// Remove a todo item
myTodoList.remove(0);

// Clear all todo items
myTodoList.clear();

// Get all todo items after clearing
const clearedTodos = myTodoList.getAll();
console.log("Cleared todo items:", clearedTodos);
