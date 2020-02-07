class Todo {
    constructor(data) {
        Object.assign(this, {
            done: false,
            text: '',
            timestamp: Date.now()
        }, data);
    }
}

export default Todo;