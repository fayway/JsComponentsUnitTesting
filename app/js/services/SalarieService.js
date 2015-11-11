var $ = require('jquery');
import Salarie from '../models/Salarie';
import ObjectUtils from '../utils/ObjectUtils';

export default {
    getSalaries: function () {
        return new Promise(function (fulfill, reject) {
            $.ajax('/server/salaries.json', {
                method: 'GET'
            }).then(function (json) {
                var salaries = ObjectUtils.mapJsonToObjects(json, Salarie);
                fulfill(salaries);
            }, reject);
        });
    }
}