import Ractive from 'ractive';
import Iban from '../../atoms/Iban';
import VirementBox from '../../atoms/virement-box/VirementBox';
const Template = require('raw!./salarie-card.html');

export default Ractive.extend({
    template: Template,
    components: {
        'iban': Iban,
        'virement-box': VirementBox
    }
});