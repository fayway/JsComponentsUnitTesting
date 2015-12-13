import Ractive from 'ractive';
import mdlDecorator from '../../decorators/mdlDecorator';
import Header from '../ecosystems/Header';
import NavigationDrawer from '../ecosystems/NavigationDrawer';
import MainSection from '../ecosystems/MainSection';

Ractive.DEBUG = false;
Ractive.decorators.mdl = mdlDecorator;

export default {
    bootstrap: function (el='body') {
        new Ractive({
            el: el,
            components: {
                'demo-header': Header,
                'demo-drawer': NavigationDrawer,
                'demo-main': MainSection
            },
            oninit: function () {
                this.on('search-filter.keywordchange', function (keyword) {
                    this.set('keyword', keyword);
                }.bind(this));
            },
            template: `
                <div class="app app-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                    <demo-header />
                    <demo-drawer />
                    <demo-main salaries="{{salaries}}" keyword="{{keyword}}" />
                </div>
            `
        });
    }
}

