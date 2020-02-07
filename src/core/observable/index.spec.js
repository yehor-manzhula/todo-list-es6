import observable from './index';

const TestRunner = require('jest-runner');

describe('Observable', () => {

    test('Event emit on object change', () => {
        const emitter = jest.fn();

        const user = {
            name: 'George',
            surname: 'Carlin'
        };

        const observableUser = observable(user, emitter);

        observableUser.name = 'Louis';  
        observableUser.surname = 'Szekely';
  
        expect(emitter).toBeCalledTimes(2);
        expect(emitter).toHaveBeenNthCalledWith(1, observableUser, 'name', 'Louis');
        expect(emitter).toHaveBeenNthCalledWith(2, observableUser, 'surname', 'Szekely');
    });


    test('Event emit on object assign', () => {
        const emitter = jest.fn();

        const user = {
            name: 'George',
            surname: 'Carlin'
        };

        const observableUser = observable(user, emitter);

        Object.assign(observableUser, {
            name: 'Louis',
            surname: 'Szekely'
        });
    
        expect(emitter).toBeCalledTimes(2);
        expect(emitter).toHaveBeenNthCalledWith(1, observableUser, 'name', 'Louis');
        expect(emitter).toHaveBeenNthCalledWith(2, observableUser, 'surname', 'Szekely');
    });
});