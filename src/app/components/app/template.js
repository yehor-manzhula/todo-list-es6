import styles from './styles.js';

import Info from '../info/index.js';
import NewTodo from '../new-todo/index.js'
import { List } from '/src/core/ui/list/index.js'

export default ({ total, done }) => `
    <style>${styles}</style>
    <section>
        <header>
            <h1>todos</h1>
        </header>
        <section class="main">
            <todo-new-todo tooltip="Ctrl+Enter"></todo-new-todo>
            <hr/>
            <todo-list></todo-list>
            <todo-info total="${total}" done="${done}"></todo-info>
        </section>
        <footer></footer>
    </section>
`;