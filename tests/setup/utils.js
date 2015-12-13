exports.stripSpaces = function (html) {
    return html.trim().replace(/\s+/g, ' ').replace(/(\r\n|\n|\r)/g, '').replace(/> </g, '><');
}

exports.getContainerFixture = function (document) {
    var fixture = document.createElement('div');
    fixture.setAttribute('style', 'visibility: hidden');
    document.body.appendChild(fixture);
    return fixture;
}