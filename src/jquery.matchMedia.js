(function ($) {
    "use strict";

    $.mq = {
        action: function (rule, actionIsTrue, actionIsFalse, elThis) {
            if (typeof actionIsTrue == 'function' || typeof actionIsFalse == 'function') {
                var mq = window.matchMedia(rule);

                var callTrigger = function () {
                    var matches = mq.matches;

                    if (!matches && typeof actionIsFalse == 'function') {
                        if (elThis) {
                            actionIsFalse.call(elThis);
                        } else {
                            actionIsFalse();
                        }
                    } else if (matches && typeof actionIsTrue == 'function') {
                        if (elThis) {
                            actionIsTrue.call(elThis);
                        } else {
                            actionIsTrue();
                        }
                    }
                };

                mq.addListener(callTrigger);
                callTrigger();
            }
        },
        getBreakpoint: function () {
            var before = window.getComputedStyle(document.documentElement, ':before');
            var content = before.getPropertyValue('content');
            content = content.substring(1, content.length - 1).replace(/\\/g, '');
            return JSON.parse(content);
        }
    };

    $.fn.mq = function (rule, actionIsTrue, actionIsFalse) {
        return this.each(function () {
            $.mq.action(rule, actionIsTrue, actionIsFalse, this);
        });
    }
})(jQuery);
