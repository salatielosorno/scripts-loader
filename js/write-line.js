function writeLineBuilder(selector) {
    const list = document.querySelector(selector);

    return function writeLine(text) {
        const item = document.createElement('li');
        item.innerHTML = text;
        list.appendChild(item);
        console.info(text);
    }
}