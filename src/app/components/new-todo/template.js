import styles from './styles.js'; 

export default ({text, tooltip}) => `
    <style>${styles}</style>
    <div class="container">
        <div class="text" 
            tooltip="${tooltip}"
            placeholder="What needs to be done?" 
            contenteditable="true">${text}</div>
        <div class="error">At least one alphanumeric character required</div>
    </div>
`;