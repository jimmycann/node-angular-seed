import '../css/main.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularSanitize from 'angular-sanitize';

if (ON_TEST) {
    require('angular-mocks/angular-mocks');
}

import registerDirectives from './directives';
import registerConfig from './config';
import registerControllers from './controllers';
import registerServices from './services';
import registerFactories from './factories';
import registerFilters from './filters';

const ngModule = angular.module('app', [uiRouter, angularSanitize]);

registerConfig(ngModule);
registerDirectives(ngModule);
registerControllers(ngModule);
registerServices(ngModule);
registerFactories(ngModule);
registerFilters(ngModule);