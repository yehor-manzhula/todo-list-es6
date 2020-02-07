import { Component, register, templify } from '/src/core/ui/component/index.js';

class ApplicationComponent extends Component {}

function componentRegister(name, componentClass, extend) {
    return register(`todo-${name}`, componentClass, extend);
}

ApplicationComponent.register = componentRegister;

export { 
    ApplicationComponent as default, 
    ApplicationComponent as Component, 
    componentRegister as register, 
    templify
};
