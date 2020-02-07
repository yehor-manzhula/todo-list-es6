function observable(target, emitter = () => {}) {
    return new Proxy(target, {
        set: function(obj, prop, value) {                
            obj[prop] = value;
            emitter.call(null, obj, prop, value);
            
            return true;
        }
    });
};

export default observable;