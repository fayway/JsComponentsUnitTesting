import Ractive from 'ractive';
import Breadcrumb from '../atoms/Breadcrumb';
import SearchFilter from '../atoms/SearchFilter';
import BarMenu from '../organisms/bar-menu/BarMenu';

export default Ractive.extend({
    template: `
        <header class="app-header mdl-layout__header mdl-color--white mdl-color--grey-100 mdl-color-text--grey-600">
            <div class="mdl-layout__header-row">
                <breadcrumb />
                <div class="mdl-layout-spacer"></div>
                <search-filter />
                <bar-menu />
            </div>
        </header>
    `,
    components: {
        'breadcrumb': Breadcrumb,
        'search-filter': SearchFilter,
        'bar-menu': BarMenu
    }
});
