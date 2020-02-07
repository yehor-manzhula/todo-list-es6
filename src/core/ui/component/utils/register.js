function register(name, constructor, extend) {
    customElements.define(name, constructor, extend);
    
    return constructor;
}

export default register;