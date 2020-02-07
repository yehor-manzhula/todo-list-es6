import { Component, templify} from '/src/app/ui/component/index.js';
import template from './template.js';

import TodoComponent from '../todo/index.js';

import { ListItem as ListItemComponent } from '/src/core/ui/list/index.js';

class Application extends Component {

    constructor() {
        super();
        this.todos = [];
    }

    _template() {
        return () => {
            const container = templify`${template({
                total: this.todos.length,
                done: this.todos.doneNumber()
            })}`(this);

            this._renderListTo(container.querySelector('todo-list'));
            return container;
        }
    }

    _renderListTo(list) {
        list = list || this._shadow.querySelector('todo-list')
        list.innerHTML = '';

        this.todos.sort(this._sortByDate)
            .sort(this._sortByDone)
            .forEach(todo => {
                const listItem = new ListItemComponent();
                list.appendChild(listItem);
            
                const todoComponent = new TodoComponent();

                Object.assign(todoComponent, {
                    done: todo.done,   
                    text: todo.text
                });
                
                listItem.appendChild(todoComponent);
              
                todoComponent.addEventListener('changed', event => {  
                    Object.assign(todo, event.detail);
                  
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                });
            });
    }

    _sortByDone(a, b) {
        return (a.done === b.done) ? 0 : a.done ? 1 : -1;
    }

    _sortByDate(a, b) {
        return b.timestamp - a.timestamp;
    }
    
    _updateInfo() {
        const todoInfo = this._find('todo-info');

        Object.assign(todoInfo, {
            total: this.todos.length,
            done: this.todos.doneNumber()
        });
    }

    _bindEvents() {
        this._listeners.push(this.todos.on('changed', () => this._onTodosChanged()));
        this._listenTo('todo-new-todo', 'submit', this._createNewTodo);
    }

    _onTodosChanged() {
        this._renderListTo();
        this._updateInfo();
    }

    _createNewTodo(event) {
        this._emit('create-new-todo',  event.detail);
        event.stopPropagation();
    }
}

export default Component.register('app', Application);
