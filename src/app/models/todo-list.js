import ObservableList from '/src/core/models/observable-list.js';

import Todo from '/src/app/models/todo.js';

class TodoList extends ObservableList {
    
    constructor(items) {
        super(items);
    }

    push(items = []) {
        items = Array.isArray(items) ? items : [items];
        super.push(items.map(item => item instanceof Todo ? item : new Todo(item)));
    }

    doneNumber() {
        return this.filter(item => item.done).length;
    }
}

export default TodoList;