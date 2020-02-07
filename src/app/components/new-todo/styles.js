export default `
    :host {
        display: block;
    }

    .container {
        display: flex;
        flex-direction: column;
    }

    .text {
        flex: 1;
        position: relative;
        display: block;

        background: #fff;
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);

        text-align: left;
        height: auto; 
        min-height: 40px;
        padding: 4px 10px;
        font-size: 35px;
        color: #4d4d4d;
        white-space: pre-wrap;
        line-height: 40px;
    }
    
    .text:after {
        position: absolute;
        opacity: 0.5;
        right: 5px;
        bottom: 5px;
        content: attr(tooltip);
        color: #4d4d4dab; 
        font-size: 12px;
        line-height: 1;
    }

    .error {
        color: rgba(255,0,0,0.54);
        margin: 2px 0 0 0px;
        display: none;
    }

    .invalid .text {
        outline-color: rgba(255,0,0,0.54);
    }

    .invalid .error {
        display: block;
    }

    [placeholder]:empty::before {
        content: attr(placeholder);
        color: #4d4d4dab; 
    }
    
    [placeholder]:empty:focus::before {
        content: "";
    }
`;