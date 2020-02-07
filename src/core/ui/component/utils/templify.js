function interpolate(strings, ...expressions) {
    const template = document.createElement('template');

    template.innerHTML = expressions.reduce((result, expression, index) => {  
        return `${result}${expression}${strings[index + 1]}`;
    }, strings[0]);

    return template.content.cloneNode(true);
}

function tempify(...args) {
    return () => interpolate.apply(null, args);
}

export default tempify;