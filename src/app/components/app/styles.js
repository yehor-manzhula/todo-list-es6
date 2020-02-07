export default `:host {
    display: block;
    box-sizing: border-box;
    height: 100%;
    padding: 20px;

    background: #f5f5f5;
    text-align: center;

    line-height: 1.4em;
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

section {
    margin: 0 auto;
    max-width: 600px;
}

section h1 {
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    margin: 20px 0;
}

.main {
    padding: 0px 0 10px 0;  
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.main > todo-new-todo {
    padding: 10px 10px;
}

.main hr {
    margin: 1px 0;
    border-color: rgba(0,0,0,0.05);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}

.main footer {
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
}

.main footer:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

todo-list {
    max-height: 300px;
    overflow-y: scroll;
}

todo-list-item {
    border-bottom: 1px solid #e6e6e6;
}
`;