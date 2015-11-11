import Ractive from 'ractive';
import IBAN from '../../valueobjects/IBAN';

export default Ractive.extend({
    computed: {
        ibanVO: function () {
            var iban = this.get('iban');
            if (iban) {
                var ibanArray = this.ibanSplitter(iban);
                if (ibanArray instanceof Array && ibanArray.length > 6) {
                    return new IBAN(ibanArray[1], ibanArray[2], ibanArray[3], ibanArray[4], ibanArray[5], ibanArray[6]);
                }
            }
        }
    },
    ibanSplitter: function (iban) {
        var ibanRegex = /^([A-Z]{2})(\d{2})(\d{5})(\d{5})(\d{11})(\d{2})$/;
        return iban.match(ibanRegex);
    },
    template: `
        <table class="app-virement-iban mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
            <tr>
                <th class="mdl-data-table__cell--non-numeric">Pays</th>
                <th>Contrôle</th>
                <th>Banque</th>
                <th>Guichet</th>
                <th>Compte</th>
                <th>Clé RIB</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="mdl-data-table__cell--non-numeric" role="pays">{{ibanVO.pays}}</td>
                <td role="controle">{{ibanVO.controle}}</td>
                <td role="banque">{{ibanVO.banque}}</td>
                <td role="guichet">{{ibanVO.guichet}}</td>
                <td role="compte">{{ibanVO.compte}}</td>
                <td role="cle">{{ibanVO.cle}}</td>
            </tr>
            </tbody>
        </table>
    `
});