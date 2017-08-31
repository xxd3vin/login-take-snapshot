"use strict";
var page = require('webpage').create();
console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
// page.open('http://www.httpuseragent.org', function (status) {
page.open('https://useragent.openadmintools.com/', function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var ua = page.evaluate(function () {
            // return document.getElementById('myagent').innerText;
            return document.getElementById('qua').textContent;
        });
        console.log(ua);
    }
    phantom.exit();
});
