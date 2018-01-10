# jquery.matchMedia.js
jQuery adapter for matchMedia (https://developer.mozilla.org/cs/docs/Web/API/Window/matchMedia)

Current browser support: https://caniuse.com/#search=matchMedia

jquery.matchMedia.js has two versions
1. dist/jquery.matchMedia.js <a href="https://dkacha.github.io/jquery.matchMedia.js/demo/demo.html"><b>DEMO HERE</b></a>
2. dist/jquery.matchMedia.polyfill.js - include polyfill (https://github.com/paulirish/matchMedia.js/) <a href="https://dkacha.github.io/jquery.matchMedia.js/demo/demo-and-polyfill.html"><b>DEMO HERE</b></a>

## NPM
npm install jquery-matchmedia --save

## options
* Rule - **string** - media queries rule or <a href="#you-can-share-media-query-rules-with-css">name</a>. Example: '**(**max-width: 40em**)**' or 'md'.
* HandlerTrue - **function** - function is calling, if rule is true.
* HandlerFalse - **function** - function is calling, if rule is false.
* Listener - **booleans** - default is true - addListener on resize

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

In css you need to write json with breakpoints to html:before {content '-->>HERE<<--'}:

```css
    html:before {
      display: none;
      content: '{"xs" : "(max-width: 47.9375em)", "sm": "(min-width: 48em) and (max-width: 61.9375em)", "md": "(min-width: 62em) and (max-width: 74.9375em)", "lg": "(min-width: 75em)"}';
    }
```

Now you can call rules by names (xs, sm, md, lg).

This can be use **after $(document).ready()**.

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

Object with breakpoints rules is return **$.mq.getBreakpoints()**.

For inspiration I thank to Jan Semilský and <a href="https://github.com/Jahoda">Bohumil Jahoda</a>.