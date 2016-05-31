import '../style/css/main.css';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-sanitize';

if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}

import registerConfig from './config';
import registerFilters from './filter';
import registerMain from './main';

angular.module('app', [
    'app.core',
    'app.main'
]);

angular.module('app.core', [
    'ui.router',
    'ngSanitize'
]);

angular.module('app.main', []);

registerConfig();
registerFilters();
registerMain();