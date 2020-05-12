'use strict';

const _browser = chrome || browser;

_browser.browserAction.onClicked.addListener(function(tab) {
    const data = prompt("PostMessage Debug : Message to send to the current tab", "{msg: 'Hello friend!'}")
    if (data) {
        _browser.tabs.executeScript(tab.id, {code: `postMessage(${data}, '*')`, allFrames: true})
    }
});
