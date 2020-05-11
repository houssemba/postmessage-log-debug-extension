'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
    const data = prompt("PostMessage Debug : Message to send to the current tab", "{msg: 'Hello friend!'}")
    if (data) {
        chrome.tabs.executeScript(tab.id, {code: `postMessage(${data}, '*')`, allFrames: true})
    }
});