const $ = require('jquery');

export default {
    mapJsonToObjects: function (json, object) {
        return json.map(function(element) {
            return $.extend(new object(), element);
        })
    }
}