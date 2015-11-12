var $ = require('jquery');
import Operation from '../models/Operation';
import ObjectUtils from '../utils/ObjectUtils';

export default {
    getOperations: function () {
        return new Promise(function (fulfill, reject) {
            $.ajax('/server/operations.json', {
                method: 'GET'
            }).then(function (json) {
                var operations = ObjectUtils.mapJsonToObjects(json, Operation);
                fulfill(operations);
            }, reject);
        });
    },
    getPendingOperations: function () {
        return new Promise(function (fulfill, reject) {
            this.getOperations().then( (operations) => {
                var pending = operations.filter(function (operation) {
                    return 'Pending' === operation.statut;
                });
                fulfill(pending);
            }, reject);
        });
    }
}