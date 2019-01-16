import directives from './directives/';

const module = angular.module('nkshio', []);

directives.forEach(directive => {
    module.directive(directive.directiveName, directive.directiveFactory);
});

export default module;