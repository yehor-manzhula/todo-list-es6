const mixin = Base => class EventEmitter extends Base {
    
    constructor() {
        super();
        this._listeners = [];
    }

    _listenersForEvent(eventName, exactListener) {
        return this._listeners.filter(listener => {
            if (exactListener) {
                return (listener.event === eventName) && listener.fn === exactListener;
            }

            return listener.event === eventName;
        });
    }

    emit(...args) {
        const [eventName, ...rest] = args;

        this._listenersForEvent(eventName)
            .forEach(listener => {
                listener.fn.apply(null, rest);
            });
    } 

    off(eventName, fn) {
        const toRemove = this._listenersForEvent(eventName, fn)
        this._listeners = this._listeners.filter(listener => !toRemove.includes(listener));
    }

    on(event, fn) {
        this._listeners.push({
            event,
            fn
        });

        return this.off.bind(this, event, fn);
    }
}

export default mixin;