var $ = require('jquery');

export default {
    postVirement: function (salarieId, mountant) {
        return new Promise(function (fulfill, reject) {
            return $.ajax('/server/virement.order.json', {
                method: 'GET',
                data: {
                    salarieId: salarieId,
                    mountant: mountant
                }
            }).then (function (data) {
                setTimeout(function () {
                    fulfill(data)
                }, 1200);
            }, reject);
        });

    }
}