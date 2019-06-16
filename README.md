![Fork me on GitHub](https://raw.githubusercontent.com/whatthefoo/fork-me-on-github/master/docs/fork-me-on-github-logo-github-full-width.png "A fresher 'Fork me on GitHub' callout, now on React")

# Fork me on GitHub

> :octopus: A fresher 'Fork me on GitHub' callout, now on React.

[![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/whatthefoo/fork-me-on-github/blob/master/LICENSE)

Use **fork-me-on-github** to promote your project on GitHub:

```javascript
<ForkMeOnGithub repo="https://github.com/whatthefoo/fork-me-on-github"/>
```

...outputs a black `SVG` 'Fork me on GitHub' corner that's animated on hover. The default is black background with a white Octocat.

# Customization

Instead of maintaining a list of possible combinations on this README, I created a living GitHub page, tha serves both as a way of showcase the variations and facilitate their use.

https://dreamyguy.github.io/fork-me-on-github/

**On this page you can:**

- Choose your 'Fork me on GitHub' from a set of pre-defined ones
- Copy the resulting component to the clipboard
- See a demonstration of what can be customized

## Properties

### `repo`:

String, _Required_.

```javascript
<ForkMeOnGithub repo="https://github.com/whatthefoo/fork-me-on-github"/>
```
---
### `colorOctocat`:

String, _Optional_ (defaults to `white`)

If the assigned color doesn't pass color validation (courtesy of [validate-color][5]), it will fallback to `white`. Check your `console` for messages if you don't see your change applied.

```javascript
<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorOctocat="#bada55"
/>
```
---
### `colorBackground`:

If the assigned color doesn't pass color validation (courtesy of [validate-color][5]), it will fallback to `black`. Check your `console` for messages if you don't see your change applied.

String, _Optional_ (defaults to `black`)

```javascript
<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorBackground="#bada55"
/>
```
---
### `isDocumentation`:

Boolean, _Optional_ (defaults to `false`)

If passed, it won't apply the absolute positioning, overriding the prop `side`.

```javascript
<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  isDocumentation
/>
```
---
### `side`:

String, _Optional_ (defaults to `right`, only accepts `right` or `left`)

If `isDocumentation` is passed, `side` will have no effect as the component won't be absolutely positioned.

```javascript
<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  side="left"
/>
```
---
### `text`:

String, _Optional_ (defaults to `Fork me on GitHub`)

This property is solely meant to improve accessibility.

```javascript
<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  text="View source on GitHub"
/>
```

# Using _fork-me-on-github_ through `npm`

**fork-me-on-github** is also [available as a package on `npm`](https://www.npmjs.com/package/fork-me-on-github) and can be installed as a depedency with:

    npm i fork-me-on-github --save

As with any node module, first you'll have to import it with `require`:

```javascript
var ForkMeOnGithub = require('fork-me-on-github');
```

...but in a modern **React** implementation you'll be using `import`:

```javascript
import ForkMeOnGithub from 'fork-me-on-github';
```

# Development

## Getting started

Clone this repo locally. You'll need to have [NodeJS][6] installed. Install all dependencies by running:

    npm i

## Run it locally

To start the app locally, run:

    npm run start

This command fires up the application on port `9990`, making it visible on http://localhost:9990. Because this app is based on [create-react-app][2], the port number should be configured on the [.env](https://github.com/whatthefoo/fork-me-on-github/blob/master/.env#L1) file.

## Building the frontend for Production

When you're ready to build for production, run:

     npm run build

This command compiles all production-optimised resources to a folder called **build**. It's meant to be run remotely, at the environment host, at build time.

## License

[MIT](LICENSE)

# About

**fork-me-on-github** was put together by [Wallace Sidhrée][1] 👨‍💻🇳🇴. It is heavily based on [github-corners][3], an amazing work done by [Tim Holman][4].

  [1]: http://sidhree.com/
  [2]: https://facebook.github.io/create-react-app/
  [3]: https://github.com/tholman/github-corners
  [4]: http://tholman.com
  [5]: https://github.com/dreamyguy/validate-color
  [6]: https://nodejs.org/
