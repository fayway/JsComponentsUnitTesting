var $ = require('jquery');
import Compte from '../models/Compte';
import ObjectUtils from '../utils/ObjectUtils';

export default {
    getComptes: function () {
        return new Promise(function (fulfill, reject) {
            $.ajax('/server/comptes.json', {
                method: 'GET'
            }).then( (json) => {
                var comptes = ObjectUtils.mapJsonToObjects(json, Compte);
                fulfill(comptes);
            }, reject);
        });
    }
}