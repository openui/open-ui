# Link Area Delegation

## State of this explainer
We are currently incubating and exploring a new idea. Chime in!

## Overview
Historically and for very good reasons, interactive elements in the web cannot include other interactive elements, and specifically nested links.
This is a well established [HTML ARIA guideline]([https://w3c.github.io/html-aria/](https://w3c.github.io/html-aria/#allowed-descendants-of-aria-roles)).

Despite this, many websites, [Walmart](https://walmart.ca), [Reddit](https://reddit.com), [Rotten Tomatoes](https://rottentomatoes.com), to name a few prominent ones,
use CSS and JS to express something that feels like nested links. 

## The card pattern
The common pattern for nested links is usually a clickable "card" with internal clickable links, like this:
<img src="https://github.com/user-attachments/assets/27e5076d-bc98-4fb8-a429-e8462ff9024c" width=400>

The whole card is clickable and would lead to the Reddit post, but the buttons (Download, comments, join etc) are also clickable.

## Existing ways to achieve this
Today, achieving this is done using two alternatives, each with its own tradeoffs:
1. Stacking: put the link *behind* the buttons, so that it catches clicks that are not handled by the buttons.
2. Capturing: have the card capture clicks, and delegate them to the main link only if the original target is not one of the buttons.\

These are imperfect and brittle ways to achieve this kind of experience, however this became a common enough pattern in the web, so perhaps it is time it became a first class citizen.

## Don't panic (a11y concerns)
The ARIA guidelines discussed earlier are still valid, so this needs to be treaded carefully. However, it doesn't seem like the websites that introduce this pattern break ARIA in any way.
That's because this pattern doesn't modify the interactive structure of the page (AKA semantics, AKA the accessibility tree), it only gives cards enhanced behavior when they are clicked,
allowing their clicks to be handled as if its target was the main link.

One accessibility issue that can be caused by using this (and any of the existing methods) is creating clickable targets that are too close together (see [these guidelines](https://www.w3.org/WAI/perspective-videos/controls/)).
This is indeed a concern, but it's debatable whether enabling this feature in HTML makes a difference for this concern vs. the current approaches.
The contrary might be true, where giving this information to the UA might give it a chance to intervene when the clickable nested target is too small.

## Link Area Delegation
The proposed mental model of this problem is "the card is delegating its interactive area to one of its link descendants".
This can mean two things in terms of UI:
1. The default click action for the card is the default click action of the link descendant
2. The card's context menu behavior is augmented with the link descendant's context menu behavior (e.g. "Open in a new tab")
3. Potentially, the UA can expand the hit-testing area for some of the descendants, to prioritize clicking them vs. clicking on the card.
4. This feature has no effect on keyboard navigation.
5. At first, this feature is not exposed to the accessibility tree, and should have no effect on assistive technologies. We can research in the future whether this card/link relationship can be expressed in these technologies in a useful way.

### Link delegation attributes
Expressing link area delegation in HTML can look something like this:
```html
<section class="card" linkarea>
  <a href="/post?id=123" defaultlink>Post Title</a>
  <img>
  <button>Join</button>
  <button>Share</button>
</section>
```

In the above example, the `section` element has a `linkarea` attribute, which would delegate its click to the first descendant with a `defaultlink` attribute, in this case the first `a` element.

We could have different similar alternatives to this with different ergonomic tradeoffs, e.g. using ID references:
```html
<section class="card" link="card123-title">
  <a href="/post?id=123" id="card123-title">Post Title</a>
  <img>
  <button>Join</button>
  <button>Share</button>
</section>
```

Note that in this example, the link still has to be a descendant of the card. This is to guide web authors to an interactive structure where the links are in the appropriate place in the tree.

## Alternatives considered

### A new element type
One of the alternatives that sound natural is a new element type:
```html
<section class="card">
  <linkarea>
    <a href="/post?id=123" defaultlink>Post Title</a>
    <img>
    <button>Join</button>
    <button>Share</button>
  </linkarea>
</section>
```

This can feel compelling in a semantic sense, but becomes undesirable when we think of the flexibility of attributes.
For example, a use case for link area delegation is making table rows clickable.

```html
<table>
  <tr linkarea>
     <td>1.</td>
     <td><a href="/details?id=1" defaultlink>Title</a>
  </tr>
</table>
```

This is not possible with a new element, as `tr` (and some other container types) have special HTML parser behavior, and allowing them to include new types of elements would
break the page in browsers that don't support the new element type.

### CSS instead of HTML

Since this proposal focuses on click areas, perhaps CSS is better suited to this than HTML?
Something like:

```html
<section class="card">
  <a href="/post?id=123">Post Title</a>
  <img>
  <button>Join</button>
  <button>Share</button>
</section>
```

```css
.card { pointer-area: contain; }
.card a:nth-child(1) { pointer-area: expand; }
```

This has nice ergonomics because the selection of link area can be done outside of the main structure of the page using CSS selectors.
However, something about this feels limiting, as it is constrained to click areas in advance, and doesn't lend itself to future UA enhancements of this experience, such as context menus.

## Summary
Link area delegation is a common pattern on the web. This proposes graduating it from a userland CSS/JS issue to a first class web platform primitive.
Given that, we have to be careful to make the right choice around accessibility and ergonomics, especially around link areas being too close to each other.
