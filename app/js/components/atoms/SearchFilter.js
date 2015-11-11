import Ractive from 'ractive';

export default Ractive.extend({
    fireKeywordChange: function (event) {
        var keyword = event.node.value.toLowerCase();
        this.fire('keywordchange', keyword);
    },
    template: `
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label  class="mdl-button mdl-js-button mdl-button--icon" for="search">
                <i class="material-icons">search</i>
            </label>
            <div class="mdl-textfield__expandable-holder">
                <input class="mdl-textfield__input" type="text" id="search" on-change="fireKeywordChange(event)" on-click="fireKeywordChange(event)" />
                <label class="mdl-textfield__label" for="search">Mots clés</label>
            </div>
        </div>
    `
});