// ==UserScript==
// @name         Skip SNU change password
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  automatically skip the annoying page which inquires us to change our password every 6 months
// @author       Seung-won Park (https://swpark.me)
// @match        https://idm.snu.ac.kr/imc_change_pwd_form_mysnu.jsp?*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByName("next_bt")[0].click();
})();
