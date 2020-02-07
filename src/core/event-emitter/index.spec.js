import eventEmitter from './index';

const TestRunner = require('jest-runner');

describe('EventEmitter mixin', () => {
    class ParentClass {

        static parent() {
            return 'parent';
        }

        some() {
            return 'some';
        }
    }

    class ChildClass extends eventEmitter(ParentClass) {

        static child() {
            return 'child';
        }

        other() {
            return 'other';
        }
    }

    let eventEmitable;

    beforeAll(() => eventEmitable = new ChildClass());

    test('Methods accessability', () => {
        expect(ChildClass.parent()).toBe('parent');
        expect(ChildClass.child()).toBe('child');
    
        expect(eventEmitable.some()).toBe('some');
        expect(eventEmitable.other()).toBe('other');

        expect(eventEmitable.on).toBeDefined();
        expect(eventEmitable.off).toBeDefined();
        expect(eventEmitable.emit).toBeDefined();
    });

    test('Subscribing to event', () => {
        const firstListener = jest.fn();
        const secondListener = jest.fn();
        const thirdListener = jest.fn();

        eventEmitable.on('create', firstListener);
        eventEmitable.on('create', secondListener);
        const offThird = eventEmitable.on('update', thirdListener);

        expect(eventEmitable._listeners.length).toBe(3);

        const createData = { id: 'asff2144412212cz' };
        eventEmitable.emit('create', createData);

        expect(firstListener).toBeCalledTimes(1);
        expect(firstListener).toBeCalledWith(createData);

        expect(secondListener).toBeCalledTimes(1);
        expect(secondListener).toBeCalledWith(createData);
        
        expect(thirdListener).not.toBeCalled();

        const updateData = { text: 'new text' };
        eventEmitable.emit('update', updateData);
        
        expect(thirdListener).toBeCalledWith(updateData);
        expect(thirdListener).toBeCalledTimes(1);
        
        offThird();
        expect(eventEmitable._listeners.length).toBe(2);
        
        eventEmitable.emit('update', updateData);
        expect(thirdListener).toBeCalledTimes(1);

        const anotherCreateData = { id: 'zzxvvqweasff214' };
        eventEmitable.emit('create', anotherCreateData);

        expect(firstListener).toBeCalledWith(anotherCreateData);
        expect(firstListener).toBeCalledTimes(2);

        expect(secondListener).toBeCalledWith(anotherCreateData);
        expect(secondListener).toBeCalledTimes(2);

        eventEmitable.off('create', firstListener);
        eventEmitable.off('create', secondListener);

        expect(eventEmitable._listeners.length).toBe(0);
    });
});