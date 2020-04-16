---
name: Select Behavior
path: /components/select.research.api
showInMenu: false
---

## Overview

This page is for testing different types of behaviors and the observations.

Currently this is testing the built-in browser based `<select>` control

# Should &lt;option&gt; allow for interactive content <a id="optionelement-value"></a>

If you have the following DOM structure, what is the value of the option?

```
<select>
   <option>
      <div>Option 1</div>
      <checkbox value="one" /> One
   </option>
   <option>
      <div>Option 2</div>
      <checkbox value="two" /> Two
      <checkbox value="three" /> Three
  </option>
</select>
```

### Current behavior

The [current behavior](https://jsbin.com/fimelilako/edit?html,js,console,output) takes the
text nodes of the children and creates the value from this and does not allow interactive content.
This is due to the DOM parsing removing everything but text nodes, but ultimately that is the end value.

So for the following scenario:

```
<option><div>This is</div> a checkbox</option>
```

The `value` is `This is a checkbox`. If we go back to our example above and use this same logic
while under the assumption that the parser does not remove the non-text node elements we have:

```
  <!-- Value will be "Option 1 One" -->
  <option>
    <div>Option 1</div>
    <checkbox value="one" /> One
  </option>

  <!-- Value will be "Option 2 Two Three" -->
  <option>
    <div>Option 2</div>
    <checkbox value="two" /> Two
    <checkbox value="three" /> Three
  </option>
```

### Proposed solution

We maintain that an `<option>` cannot contain additional interactive elements as this introduces many additional questions
and opens the opportunity for poor UX (eg: two checkboxes within a single option). While someone may want something
like this it breaks the paradigm of what a `<select>` is meant to be.

#### Checkboxes are a common paradigm

The most common paradigm where there is an additional interactive element is
when an option "contains" a checkbox. This can

**[OPEN QUESTION | TELEMETRY]** Is HTML within an `<option>` a common paradigm today?
