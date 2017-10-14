# jquery.matchMedia.js
jQuery adapter for matchMedia (https://developer.mozilla.org/cs/docs/Web/API/Window/matchMedia)

Current browser support: https://caniuse.com/#search=matchMedia

jquery.matchMedia.js has two versions
1. dist/jquery.matchMedia.js
2. dist/jquery.matchMedia.polyfill.js - include polyfill (https://github.com/paulirish/matchMedia.js/)

## options
* Rule - **string** - media queries rule. Example: '**(**max-width: 40em**)**'
* HandlerTrue - **function** function is calling, if rule is true
* HandlerFalse - **function** function is calling, if rule is false

You can call function in two ways

### With selector
```js
    $('.element').mq(rule, handlerTrue, handlerFalse);
```
Example
```js
    $('.element').mq('(min-width: 40em)', function () {
        $(this).css('color', 'green').text('true');
    }, function () {
        $(this).css('color', 'red').text('false');
    });
```

**OR**

### Without selector
```js
    $.mq.action(rule, handlerTrue, handlerFalse);
```
Example
```js
    $.mq.action('(min-width: 40em)', function () {
        console.log('true');
    }, function () {
        console.log('false');
    });
```


### You can share media query rules with css

In css you must write json:

```css
    html:before {
      display: none;
      content: '{"xs" : "(max-width: 47.9375em)", "sm": "(min-width: 48em) and (max-width: 61.9375em)", "md": "(min-width: 62em) and (max-width: 74.9375em)", "lg": "(min-width: 75em)"}';
    }
```

In js you must write:

```js
var breakpoint = $.mq.getBreakpoint();
```

And now it works

```js
    $('.element').mq('breakpoint.md', function () {
        $(this).css('color', 'green').text('md true');
    }, function () {
        $(this).css('color', 'red').text('md false');
    });
    
    $.mq.action(breakpoint.sm, function () {
        console.log('sm true');
    }, function () {
        console.log('sm false');
    });
```