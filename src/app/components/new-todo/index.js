import { Component, templify } from '/src/app/ui/component/index.js';

import template from './template.js';

class NewTodoComponent extends Component {
    
    get tooltip() {
        return this.getAttribute('tooltip');
    }

    set tooltip(value) {
        return this.setAttribute('tooltip', value);
    }
      
    get text() {
        return (this._find('.text')|| { innerText: '' }).innerText;
    }
      
    set text(value = '') {
        this._find('.text').innerHTML = value;
    }

    set _invalid(isInvalid) {
        this._find('.container').classList[isInvalid ? 'add' : 'remove']('invalid');
    }

    get _valid() {
        const isValid = !!((this.text || '').match(/[\w\u0430-\u044f]+/gmi) || '').length;
        this._find('.container').classList[isValid ? 'remove' : 'add']('invalid');

        return isValid;
    }

    constructor() {
        super();
    }

    _template() {
        return templify`${template({ 
            text: this.text,
            tooltip: this.tooltip 
        })}`;
    }

    _bindEvents() {
        this._listenTo('.text', 'keyup', this._onKeyUp);
        this._listenTo('.text', 'focusout', this._onFocusout);
    }

    _onFocusout() {
        this._invalid = false;
    }
    
    _onKeyUp(e) {
        if (e.keyCode == 27) {
            this._emit('cancel', {
                text: this.text
            });
        }

        if ((e.ctrlKey || e.metaKey) && (e.keyCode == 13 || e.keyCode == 10)) {
            this._invalid = !this._valid;

            if (this._valid) {
                this._emit('submit', {
                    text: this.text
                });

                (this._find('.text') || {}).innerHTML = '';
            }
        }

        e.stopPropagation();
        e.stopImmediatePropagation();
    }

    focus() {
        this._find('.text').focus();

        document.execCommand('selectAll', false, null);
        document.getSelection().collapseToEnd();
    }
}

export default Component.register('new-todo', NewTodoComponent);