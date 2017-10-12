(function ($) {
    "use strict";

    $.mq = {
        action: function (rule, handlerTrue, handlerFalse, elThis) {
            if (typeof handlerTrue == 'function' || typeof handlerFalse == 'function') {
                var mq = window.matchMedia(rule);

                var callTrigger = function () {
                    var matches = mq.matches;

                    if (!matches && typeof handlerFalse == 'function') {
                        if (elThis) {
                            handlerFalse.call(elThis);
                        } else {
                            handlerFalse();
                        }
                    } else if (matches && typeof handlerTrue == 'function') {
                        if (elThis) {
                            handlerTrue.call(elThis);
                        } else {
                            handlerTrue();
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

    $.fn.mq = function (rule, handlerTrue, handlerFalse) {
        return this.each(function () {
            $.mq.action(rule, handlerTrue, handlerFalse, this);
        });
    }
})(jQuery);
