'use strict';

addEventListener('message', function(event) {
    console.log(`${new Date().toISOString()} - ${window.location.href} received a message \n\tfrom ${event.origin} \n\twith data`, event.data)
});