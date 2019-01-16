export default class SwipeButton {

    static get directiveName() {
        return 'swipeButton';
    }

    static directiveFactory($compile, $timeout) {
        SwipeButton.instance = new SwipeButton($compile, $timeout);
        return SwipeButton.instance;
    }

    constructor($compile, $timeout) {
        this.restrict = 'EA';
        this.scope = '=';

        this.bindToController = true;

        this.$compile = $compile;
        this.$timeout = $timeout;
    }

    compile() {
        return {
            pre: function preLink(scope, iElement) {
                const html = iElement.html();
                iElement.text(html);
            },
        };
    }

    link() {
        return;
    }
}

SwipeButton.directiveFactory.$inject = ['$compile', '$timeout'];