# generic-components

A collection of generic web components with a focus on:

- 🚹 Accessibility
- 🏗 Easy to use
- 🎨 Easy to style

## Goal

The goal of this project is to create a common library of generic web components, that are accessible, framework agnostic, easy to style, and easy to consume.

All components in these repo extend from HTMLElement and dont use any libraries or framework.

You can think of these components like using a native `<button>` element, you get all the functionality, and accessibility, keyboard nav, etc for free, you just have to style the button to your liking.

You can use these components to build an app, or compose them and build your own components with them.

## Usage
    
### Via npm
Components can be installed via npm

```bash
npm i --save @open-ui/generic-components
```

And imported in your code via ES imports:

```js
import '@open-ui/generic-components/generic-switch.js';
```

### Via CDN
Alternatively you can load the components from a CDN and drop them in your HTML file as a script tag

```html
<script src="https://unpkg.com/@open-ui/generic-components@0.1.0/generic-switch.js" type="module"></script>
```

```html
<generic-switch></generic-switch>
```

## Collection

| Component                                                     | Demo                                                                                           | Spec                                                                        | Status        |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|---------------|
| [generic-accordion](/generic-accordion/README.md)             | [demo](https://modest-bhaskara-e8742f.netlify.app/generic-accordion/demo/index.html)       | [Wai Aria Practices](https://www.w3.org/TR/wai-aria-practices/#accordion)       | ✅        |        
| [generic-alert](/generic-alert/README.md)                     | [demo](https://modest-bhaskara-e8742f.netlify.app/generic-alert/demo/index.html)           | [Wai Aria Practices](https://www.w3.org/TR/wai-aria-practices/#alert)           | ✅ |               
| [generic-dialog](/generic-dialog/README.md)                   | [demo](https://modest-bhaskara-e8742f.netlify.app/generic-dialog/demo/index.html)          | [Wai Aria Practices](https://www.w3.org/TR/wai-aria-practices/#dialog_modal)    | 🏗          |     
| [generic-disclosure](/generic-disclosure/README.md)           | [demo](https://modest-bhaskara-e8742f.netlify.app/generic-disclosure/demo/index.html)      | [Wai Aria Practices](https://www.w3.org/TR/wai-aria-practices/#disclosure)      | ✅          |      
| [generic-listbox](/generic-listbox/README.md)           | [demo](https://modest-bhaskara-e8742f.netlify.app/generic-listbox/demo/index.html)      | [Wai Aria Practices](https://www.w3.org/TR/wai-aria-practices/#Listbox)      | ✅          |      
| [generic-skiplink](/generic-skiplink/README.md)               | [demo](https://modest-bhaskara-e8742f.netlify.app/generic-skiplink/demo/index.html)        | [Wai Aria Practices](https://webaim.org/techniques/skipnav/)                    | ✅ |               
| [generic-switch](/generic-switch/README.md)                   | [demo](https://modest-bhaskara-e8742f.netlify.app/generic-switch/demo/index.html)          | [Wai Aria Practices](https://www.w3.org/TR/wai-aria-1.1/#switch)                | ✅        |        
| [generic-tabs](/generic-tabs/README.md)                       | [demo](https://modest-bhaskara-e8742f.netlify.app/generic-tabs/demo/index.html)            | [Wai Aria Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)        | ✅        |        
| [generic-tooltip](/generic-tooltip/README.md)                 | [demo](https://modest-bhaskara-e8742f.netlify.app/generic-tooltip/demo/index.html)         | [Wai Aria Practices](https://www.w3.org/TR/wai-aria-practices/#tooltip)         | 🏗 |               
| [generic-visually-hidden](/generic-visually-hidden/README.md) | [demo](https://modest-bhaskara-e8742f.netlify.app/generic-visually-hidden/demo/index.html) | [WebAIM](https://webaim.org/techniques/css/invisiblecontent/)                   | ✅ |         

## Todo:

### general
- Convert docs to [11ty](https://www.11ty.dev/) + [mdjs](https://github.com/open-wc/open-wc/tree/master/packages/mdjs) 
- Add api table for components with [custom-elements.json](https://github.com/webcomponents/custom-elements-json)

### generic-dialog
- Tests
- Finish implementation as web component

### generic-tooltip
- Tests
- Improve implementation