# jquery.matchMedia.js
jQuery adapter for matchMedia (https://developer.mozilla.org/cs/docs/Web/API/Window/matchMedia)

Current browser support: https://caniuse.com/#search=matchMedia

jquery.matchMedia.js has two versions
1. dist/jquery.matchMedia.js
2. dist/jquery.matchMedia.polyfill.js - include polyfill (https://github.com/paulirish/matchMedia.js/)

## options
* Rule - **string** - media queries rule or <a href="#cssBreakpoints">key</a>. Example: '**(**max-width: 40em**)**' or 'md'.
* HandlerTrue - **function** - function is calling, if rule is true.
* HandlerFalse - **function** - function is calling, if rule is false.

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


### <span id="cssBreakpoints">You can share media query rules with css</span>

In css you must write json width breakpoints to html:before {content '-->>HERE<<--'}:

```css
    html:before {
      display: none;
      content: '{"xs" : "(max-width: 47.9375em)", "sm": "(min-width: 48em) and (max-width: 61.9375em)", "md": "(min-width: 62em) and (max-width: 74.9375em)", "lg": "(min-width: 75em)"}';
    }
```

Now you can also call rules by name.
This way can be used up after $(document).ready();

```js
    $(document).ready(function () {
        $('.element').mq('md', function () {
            $(this).css('color', 'green').text('md true');
        }, function () {
            $(this).css('color', 'red').text('md false');
        });

        $.mq.action('sm', function () {
            console.log('sm true');
        }, function () {
            console.log('sm false');
        });
    });
```

For inspiration I thank Jan Semilský and <a href="https://github.com/Jahoda">Bohumil Jahoda</a>.