// Main script
(function initApp() {
    const button = document.querySelector('#start-button');
    const output = document.querySelector('#output');
    const writeLine = writeLineBuilder('#output');

    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        loadAllScripts();
    });

    function loadAllScripts() {
        output.innerHTML = '';
        writeLine('Starting App...');

        scriptsLoader
            .reset()
            .addScript('js/script-first.js')
            .addScript(['js/script-second.js', 'js/script-last.js', 'js/script-first.js'])
            .afterLoad((src) => writeLine('scriptsLoader: ' + '"' + src + '"'))
            .onComplete(() => writeLine("ALL SCRIPTS LOADED!"))
            .load();
    }
})();