# quote-generator

[npm-url]: https://www.npmjs.com/package/@timfosteman/quote-generator

### Fetch a random quote from my [Public API]()!

#### install

```
npm install @timfosteman/quote-generator
```

#### usage

```js
require('@timfosteman/quote-generator').randomQuotePromise()
    .then(Qobj => document.getElementById('quote')
    .innerHTML = '<em>' + Qobj.text + '</em>' + '<hr class="horizontal-rule-2">' + Qobj.author)
    .catch(err => console.error(err.message));
```

#### license

MIT. Copyright (c) [Timofei Shchepkin](http://fosteman.info).
