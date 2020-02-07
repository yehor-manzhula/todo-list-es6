export default `
    :host {
        display: block;
    }

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        padding: 10px;

        align-items: center;
        justify-content: space-between;
    }

    .container > div {
        display: block;
        flex: 1;
    }

    .container.editing .text-wrapper .text {
        display: none;
    }

    .narrow {
        max-width: 70px;
        min-width: 70px;
    }

    .done {
        width: 30px;
        height: 30px;
    }

    .text {
        text-align: left;
        height: auto;
        min-height: 40px;
        padding: 4px;
        font-size: 35px;
        color: #4d4d4d;

        white-space:pre-wrap;
    }
`;