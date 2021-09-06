// ==UserScript==
// @name         Slido password/name autofill
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto-fill slido password and name.
// @author       Seung-won Park
// @include      /^https://app.sli.do/event/[\w]{8}/login/*/
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        setTimeout(function(){
            document.getElementsByName('password')[0].value = 'ClassPassword';
            document.getElementsByName('name')[0].value = 'Your Name';
            document.getElementsByClassName('MuiIconButton-label')[0].click();
            //document.getElementsByName("btn_primary")[0].click(); // not working for now
        }, 1000);
    }, false);
})();
