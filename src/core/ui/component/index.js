import register from './utils/register.js';
import templify from './utils/templify.js';

class Component extends HTMLElement {
    constructor() {
        super();
       
        this._shadow = this.attachShadow({
            mode: 'open'
        });

        this._listeners = [];
    }

    connectedCallback() {
        this._render();
        this._bindEvents();
    }
    
    disconnectedCallback() {
        this._unbindEvents();
    }

    _emit(eventName, data) {
        this.dispatchEvent(new CustomEvent(eventName, {
            detail: data
        }));
    }
    
    _listenTo(selector, ...rest) {
        const [fn, ...events] = rest.reverse();
        const target = selector instanceof HTMLElement ? [selector] : this._findAll(selector);

        Array.from(target)
            .forEach(element => {
                events.forEach(event => {
                    element.addEventListener(event, fn.bind(this));

                    this._listeners.push(() => {
                        element.removeEventListener(event, fn);
                    });
                });
            });
    }

    _find(selector) {
        return this._shadow.querySelector(selector);
    }

    _findAll(selector) {
        return this._shadow.querySelectorAll(selector);
    }

    _bindEvents() {}

    _unbindEvents() {
        this._listeners.forEach(unbind => unbind());
    }

    _template() {
        return templify``;
    }

    _render() {
        const interpolate = this._template();
        const container = interpolate(); 
        
        this._shadow.innerHTML = '';
        this._shadow.appendChild(container);
    }
}

Object.assign(Component, {
    register,
    templify
});

export { Component as default, Component, register, templify };