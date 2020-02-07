import styles from './styles.js'; 

export default ({ done, text }) => `
    <style>${styles}</style>
    <div class="container">
        <div class="narrow">
            <input class="done" type="checkbox" ${done ? 'checked' : ''}/>
        </div>
        <div class="text-wrapper">
            <div class="text">${text}</div>
            <slot></slot>
        </div>
    </div>
`;