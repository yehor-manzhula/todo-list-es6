import { Component, templify } from '/src/app/ui/component/index.js';

class List extends Component {
    _template() {
        return templify`
        <style>
            :host {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;

                padding: 5px 0;
            }
        </style>
        <div>
            <slot></slot>
        <div>`;
    }
}

class ListItem extends Component {
    _template() {
        return templify`
        <style>
            :host {
                display: block;
            }
        </style>
        <div>
            <slot></slot>
        <div>`;
    }
}

Component.register('list', List);
Component.register('list-item', ListItem);

export { List as default, List, ListItem }