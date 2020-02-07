import { Component, templify } from '/src/app/ui/component/index.js';

import template from './template.js';

class InfoComponent extends Component {

    static get observedAttributes() {
        return ['total', 'done'];
    }
    
    get total() {
        return this.getAttribute('total');
    }
      
    set total(value) {
        return this.setAttribute('total', value);
    }
      
    get done() {
        return this.getAttribute('done');
    }

    set done(value) {
        return this.setAttribute('done', value);
    }

    attributeChangedCallback() {
        this._render();
    }

    _template() {
        return templify`${template({
            total: this.total,
            done: this.done
        })}`;
    }
}

export default Component.register('info', InfoComponent);