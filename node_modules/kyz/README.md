<p align="center"><img src="https://raw.githubusercontent.com/Axorax/kyz.js/main/kyz.svg"></p>

<p align="center">Collection of useful functions</p>

## ⚙️ Installation

```js
npm i kyz
```

**CDN Links:**
- https://cdn.jsdelivr.net/npm/kyz@0.0.3/kyz.js
- https://www.unpkg.com/kyz@0.0.3/kyz.js

## 📖 Usage

#### ▪ Import

```js
// ES6
import kyz from "kyz";

// commonjs
const kyz = require("kyz");
```

> [!NOTE]  
> Make sure to `console.log()` the values to see the output!

#### ▪ [Appembed](https://appembed.netlify.app/)

##### ▸ Import

```js
import { Appembed } from 'kyz';      // ES6
const { Appembed } = require('kyz'); // Commonjs
```

##### ▸ Usage

```js
const embed_link = new Appembed()
    .setAuthor('wad')
    .setOembed('https://awwd')
    .build();

console.log(embed_link);
```

#### ▪ Prevent console logs

```js
kyz.unconsole();                // Disable all console logs

kyz.unconsole(["log", "info"]); // Disable specific ones
kyz.unconsole(["log"]);
```

#### ▪ Generate UUIDs

```js
kyz.uuid();
```

#### ▪ Normalize URL

```js
kyz.normalize("test.com#hash?query=hello"); // "http://test.com/#hash?query=hello"
```

#### ▪ Check if IP format is valid or not

```js
// ▸ IPv4
kyz.validIPFormat("192.168.0.1"); // True
kyz.validIPFormat("10.0.0");      // False

// ▸ IPv6
kyz.validIPFormat("2001:0db8:85a3:0000:0000:8a2e:0370:7334", "v6"); // True
kyz.validIPFormat("hello world", "v6");                             // False
```

#### ▪ Check if string has emoji

```js
kyz.hasEmoji("Hello 🚀 world!");          // True
kyz.hasEmoji("The weather is ☀️ today!"); // True
kyz.hasEmoji("String 69!");               // False
kyz.hasEmoji("I ♥ NY");                   // False
```

#### ▪ Check if absolute URL or not

```js
// ▸ string
kyz.isAbsoluteUrl('https://www.example.com/path'); // True

// ▸ array
const urls = [
    'http://localhost:3000',
    'ftp://ftp.example.com/file.zip',
    '/path',
    'example.com',
    'C:\\path\\to\\file.txt'
];

kyz.isAbsoluteUrl(urls); // [true, true, false, false, false]
```

#### ▪ Prepend protocol

```js
kyz.prependProtocol("www.example.com");            // "https://www.example.com"
kyz.prependProtocol("localhost")                   // "https://localhost"

// default protocol is always set to "https"
kyz.prependProtocol("ftp://www.example.com");      // "https://www.example.com"

kyz.prependProtocol("example.com", "ftp");         // "ftp://example.com"
kyz.prependProtocol("https://example.com", "ftp"); // "ftp://example.com"
```

#### ▪ Milliseconds to readable format

```js
kyz.cleanMs(60000)     // "1m"
kyz.cleanMs(3600000)   // "1h"
kyz.cleanMs(86400000)  // "1d"
kyz.cleanMs(123456789) // "1d 10h 17m 36s"
```

#### ▪ Solve and verify quadratics

```js
// ▸ Solve
kyz.quadratic(1, -4, 4);         // arguments - (a, b, c)
                                 // [2, 2]

// ▸ Verify
kyz.quadratic(1, -4, 4, [2, 2]); // arguments - (a, b, c, [root1, root2])
                                 // True
```

#### ▪ Repeat Repeat Repeat

```js
// ▸ string
kyz.repeat(30, "hello");

// ▸ array
kyz.repeat(30, ["hello", "hi"]);
```

#### ▪ Find nearest and check palindrome

```js
// ▸ Check
kyz.palindrome.check(999);     // True
kyz.palindrome.check('madam'); // True

// ▸ Find nearest
kyz.palindrome.nearest(98);   // 99
kyz.palindrome.nearest('98'); // 99

kyz.palindrome.nearest('awd'); // undefined
```

#### ▪ Random item from

```js
// ▸ Map
kyz.randomItemFrom(new Map([
    ['red', '#FF0000'],
    ['green', '#00FF00'],
    ['blue', '#0000FF']
])); // "#0000FF"

// ▸ Array
kyz.randomItemFrom(['apple', 'banana', 'orange', 'pear']); // "pear"

// ▸ String
kyz.randomItemFrom('0123456789'); // "6"

// ▸ Dictionary
kyz.randomItemFrom({
    cat: 'fluffy',
    dog: 'rover',
    bird: 'tweety',
    fish: 'goldie'
}); // "tweety"
```

---

[Support me on Patreon](https://www.patreon.com/axorax) — 
[Check out my socials](https://github.com/axorax/socials)