/* global require, angular, module, exports */
/* jslint browser: true */

module.exports = angular.module('remoteRetro.directives', []);

// Define the list of directives:
require('./errorField.js');
require('./viewFeedback.js');
require('./addFeedback.js');
require('./addTheme.js');
require('./viewThemes.js');
require('./navBar.js');
