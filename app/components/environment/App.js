import Ractive from 'ractive';

export default {
    bootstrap: function (el='body') {
        let ractive = new Ractive({
            el: el,
            template: `
                <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                  <i class="material-icons">add</i>
                </button>
            `
        });
    }
}

