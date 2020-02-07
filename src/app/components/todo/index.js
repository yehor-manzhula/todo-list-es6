import { Component, templify } from '/src/app/ui/component/index.js';

import NewToDoComponent from '../new-todo/index.js';
import template from './template.js';

class TodoComponent extends Component {

    get _text() {
        return this._find('.text').innerText;
    }
      
    set _text(value = '') {
        this._shadow.querySelector('.text').innerHTML = `<span>${value}</span>`;
    }

    get _done() {
        return this._find('.done').checked;
    }
    
    set _done(value = false) {
        this._find('.done').checked = value;
        this.setAttribute('done', value);
    }

    set _editing(value) {
        this._find('.done').disabled = value;
        this._find('.container').classList[value ? 'add' : 'remove']('editing');
    }

    constructor() {
        super();
    }

    _template() {
        return templify`${template({
            done: this.done,
            text: this.text
        })}`;
    }

    _bindEvents() {
        this._listenTo('.text', 'dblclick', this._edit);
        this._listenTo('.done', 'change', this._changed);
    }

    _edit() {
        const self = this;
        const wrapper = this._find('.text-wrapper');
        
        const textToEdit = this._text;

        this._editing = true;

        const newTodo = new NewToDoComponent();
        newTodo.setAttribute('tooltip', 'Ctrl+Enter / Esc');
        wrapper.appendChild(newTodo);

        newTodo.text = textToEdit;

        newTodo.focus();

        newTodo.addEventListener('cancel', event => {
            cancelEdit(); 
        
            event.stopPropagation();
            event.stopImmediatePropagation();
        });

        newTodo.addEventListener('submit', event => {
            cancelEdit();
            this._text = event.detail.text;

            this._emit('changed', { text: this._text });

            event.stopPropagation();
            event.stopImmediatePropagation();
        });

        function cancelEdit() {
            self._editing = false;
            newTodo.remove();
        }
    }

    _changed() {
        this._emit('changed', { done: this._done });
    }
}

export default Component.register('todo', TodoComponent);