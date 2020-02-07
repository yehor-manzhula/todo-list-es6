export default ({ total, done }) => `
<style>
    :host {
        display: block;
        padding-top: 5px;
        font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #4d4d4d;
    }
</style>
${done} / ${total}`;