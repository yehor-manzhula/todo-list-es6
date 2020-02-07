import eventEmitter from '../event-emitter/index.js';
import observable from '../observable/index.js';

class ObservableList extends eventEmitter(Array) {
    
    constructor(items = []) {
        super();
        this.push(items || []);
    }

    push(items = []) {
        items = Array.isArray(items) ? items : [items];
    
        const observableItems = items.map(item => {
            const observableItem = observable(item, (item, prop, value) => {
                this.emit('changed', item, prop, value);
            });

            return observableItem;
        });
    
        super.push(...observableItems);
        this.emit('changed', this);
    }
}

export default ObservableList;