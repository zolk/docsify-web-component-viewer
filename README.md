[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# docsify-web-component-viewer

A Docsify plugin for previewing and customizing examples of Custom Elements (Web
Components).

## Requirements

You must provide a [Custom Elements Manifest (CEM)](https://github.com/webcomponents/custom-elements-manifest)
file in order to enable the Customization feature of this plugin. You can
generate one for your project by incorporating the [CEM Analyzer](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/)
into your build process.

Refer to the [DS Starter Kit project](https://github.com/zolk/ds-starter-kit)
for a fully integrated example:

- CEM Analyzer config: [custom-elements-manifest.config.js](https://github.com/zolk/ds-starter-kit/blob/main/custom-elements-manifest.config.js)
- ESBuild script that runs `cem analyze` as part of the build process: [build.js](https://github.com/zolk/ds-starter-kit/blob/main/scripts/build.js)
- Documentation example for a component: [button.ts](https://github.com/zolk/ds-starter-kit/blob/main/src/components/button/button.ts)

## Usage

### Setup & Installation

```html
<script>
  window.$docsify = {
    // ... (your existing Docsify config)
    componentDocs: {
      prefix: "ds",
      manifestPath: "/dist/custom-elements.json",
    },
  };
</script>
<script src="//cdn.jsdelivr.net/npm/docsify-web-component-viewer@1/dist/web-component-viewer.min.js"></script>
```

Default styles, which you can override or replace with your own:

```html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify-web-component-viewer@1/dist/web-component-viewer.min.css"
/>
```

### Code Viewer Blocks

This plugin works by replacing standard Markdown code blocks with
fully-functional examples when desired. Just add the word "preview" after
the language name for your code block:

<pre>
```html preview
<ds-button>My Button</ds-button>
```
</pre>

Add the word "expanded" if you'd like the code source to be displayed by default:

<pre>
```html preview expanded
<ds-button>My Button</ds-button>
```
</pre>

To enable viewing the preview in an isolated window, add any string that will
serve as a slug for the link:

<pre>
```html preview expanded mybutton
<ds-button>My Button</ds-button>
```
</pre>

To enable the customization feature, which is inspired by Storybook's Controls
feature, add `controls:[name-of-component]` _before_ the slug:

<pre>
```html preview expanded controls:button mybutton
<ds-button>My Button</ds-button>
```
</pre>

The slug must always be the last term provided to the code block.

💡 **Protip:** If your filename matches the name of your component
(e.g., `button.md`) then you can exclude the component name when enabling controls:

<pre>
// button.md
```html preview expanded controls mybutton
<ds-button>My Button</ds-button>
```
</pre>

## Options

### componentDocs.manifestPath

- Type: `String`
- Default: `undefined`

**Required for Customization feature.** The path to your
[Custom Elements Manifest](https://github.com/webcomponents/custom-elements-manifest)
file (see requirements).

### componentDocs.prefix

- Type: `String`
- Default: `undefined`

**Required for Customization feature.** The prefix used by your components. For
example, `ds` if your components use names such as `ds-button` and `ds-card`.

## Live Example

You can see this plugin in use as part of **DS Starter Kit** ([Live example](https://ds-starter-kit.vercel.app/components/button), [GitHub project](https://github.com/zolk/ds-starter-kit)).

## Local Demo

You can test this project locally in a demo Docsify installation.

First, clone this repo:

```
git clone https://github.com/zolk/docsify-web-component-viewer.git
```

Then install dependencies (you'll need [Node](https://nodejs.org/en/download/package-manager/) installed):

```
npm install
```

Finally, boot the local dev server:

```
npm start
```

By default, the server will boot at http://localhost:3000.

## Acknowledgements

This plugin was inspired by and builds upon work done for the [Shoelace](https://shoelace.style)
component library documentation by [Cory LaViska](https://twitter.com/claviska).

## License

This project was created by [Kevin Zolkiewicz](http://zolk.com) and is licensed
under an [MIT License](./LICENSE).

<br><br><br>

<p align="center"><a href="https://8thlight.com"><img src="./8l.png" height="75" alt="" /></a><br><i>This project is supported by <a href="https://8thlight.com">8th Light</a>.</i></p>
