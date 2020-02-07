import ObservableList from './observable-list.js';

const TestRunner = require('jest-runner');

describe('ObservableList model', () => {

    test('Emit event on children update', () => {
        const updateListener = jest.fn();       
        const usersList = new ObservableList();

        usersList.on('changed', updateListener);
        
        const user = {
            name: 'George',
            surname: 'Carlin'
        };

        usersList.push(user);

        expect(updateListener).toBeCalledTimes(1);
        expect(updateListener).toBeCalledWith(usersList);

        Object.assign(usersList[0], {
            name: 'Louis',
            surname: 'Szekely'
        });
        
        expect(updateListener).toBeCalledTimes(3);

        expect(updateListener).toHaveBeenNthCalledWith(2, usersList[0], 'name', 'Louis');
        expect(updateListener).toHaveBeenNthCalledWith(3, usersList[0], 'surname', 'Szekely');
    });
});