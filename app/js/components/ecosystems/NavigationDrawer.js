import Ractive from 'ractive';
import CompteSwitcher from '../organisms/compte-switcher/CompteSwitcher';
import VerticalMenu from '../organisms/vertical-menu/VerticalMenu';
import OperationService from '../../services/OperationService';
import CompteService from '../../services/CompteService';

export default Ractive.extend({
    components: {
        'compte-switcher': CompteSwitcher,
        'vertical-menu': VerticalMenu
    },
    oninit: function () {
        OperationService.getPendingOperations().then( (operations) => {
            this.set('operationPendingCount', operations.length);
        });
        CompteService.getComptes().then((comptes) => {
            this.set('comptes', comptes);
        });
    },
    template: `
    <div class="app-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <header class="app-drawer-header">
            <compte-switcher comptes="{{comptes}}" />
        </header>
        <vertical-menu />
    </div>
    `
});