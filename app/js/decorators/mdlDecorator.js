const componentHandler = requite('material');

export default function (node) {
    componentHandler.upgradeElement(node);
    return {
        teardown: function () {
            componentHandler.downgradeElements(node);
        }
    };
};
