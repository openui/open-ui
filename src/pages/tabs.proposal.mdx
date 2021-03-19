---
menu: Proposals
name: Tabs (Editor's Draft)
path: /components/tabs
pathToResearch: /components/tabs.research
showInMenu: false
---

# Tabs Component Specification

## Overview <a href="#overview" id="overview"></a>

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. Tabs allow one-at-a-time, non-sequential viewing over a series of thematically grouped, state independent and labelled sections.

### Background <a href="#background" id="background"></a>

_Relevant historical or background information, related existing issues, etc._

### Use Cases <a href="#use-cases" id="use-cases"></a>

- Steve is researching for an upcoming vacation for him and his family. He opens his web browser and opens a new tab to make a rental car reservation and another for his flight information. Steve can quickly switch back and fourth between tabs to get the information he needs for the rental car reservation.

- Monika visits a website to learn how to fix her leaky sink. The website displays a vertical tab interface with each step. Monika can jump ahead steps or go back to previous steps by selecting various tabs.

### Non-goals <a href="#non-goals" id="non-goals"></a>

_A list of use cases, features, or functionality which are **not** goals for the component._

### Features <a href="#features" id="features"></a>

- **Orientation:** Allows the tab list to be oriented horizontally above the tab content or vertically to the left or right (depending on language region) of the tab content.
- **Supplemental content:** Offers a way to add content via start and end to the left and/or right (depending on language region) of the the tab list.
- **ActiveIndicator:** Offers a way to add or remove an active indicator that highlights the currently active tab and animates to the next active tab. Defaults to true.
- **ActiveTab:** Provides a reference to the currently active tab vis the `change` event.
- **ActiveId:** Provides a way to set the active tab.

### Risks and Challenges <a href="#risks" id="risks"></a>

_Tabs_ has specific guidance on DOM structure by the [WC3](https://w3c.github.io/aria-practices/examples/tabs/tabs-2/tabs.html). This structure lacks logical groupings by separating the tab from its content. Some component libraries compensate for this by creating some kind of intermediary grouping that makes it easier for app authors to implement. Even though the DOM structure disassociates that logical grouping. While other component libraries stick to the DOM structure model.

Some scenarios require an indicator that highlights the currently active tab then animates to the next activated tab. Most solutions rely on finding active tab's position on screen and then preforming some math to get the position. This works for most cases but if the tab list repositions itself either by window resizing or other layout changes the active indicator is no longer aligned properly.

### Prior Art/Examples <a href="#prior-art" id="prior-art"></a>

#### Design Systems

- [Material Design](https://material.io/components/tabs/#anatomy)
- [Windows (UWP)](https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/tab-view)
- [Ant Design](https://ant.design/components/tabs/)
- [Lightning Design](https://www.lightningdesignsystem.com/components/tabs/)

#### Tabs Implementations

- [FAST Tabs](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/tabs/tabs.spec.md)
- [FAST Pivot (React)](https://www.npmjs.com/package/@microsoft/fast-components-react-msft)
- [Material UI](https://material-ui.com/components/tabs/)
- [Atlassian](https://atlaskit.atlassian.com/packages/core/tabs)

---

## Design <a href="#design" id="design"></a>

_Describe the design of the component, thinking through several perspectives:_

- _A customer using the component on a web page._
- _A developer building an app with the component and interacting through HTML/CSS/JavaScript._
- _A designer customizing the component._

### API <a href="#api" id="api"></a>

_Outline the key elements of the component's public API surface, taking into consideration conformance guidelines. Make sure to discuss differences and rationalizations. Consider high and low-level APIs. Attempt to design a powerful and extensible low-level API with a high-level API for developer/designer ergonomics and simplicity._

#### Properties and Attributes <a href="#properties-attributes" id="properties-attributes"></a>

_Tabs_

| Property Name     | Attribute Name    | Type      | Default Value | Description                |
| ----------------- | ----------------- | --------- | ------------- | -------------------------- |
| `orientation`     | `orientation`     | `enum`    | `horizontal`  | `horizontal` or `vertical` |
| `activeid`        | `activeid`        | `string`  |               | id of the active element.  |
| `activeindicator` | `activeindicator` | `boolean` | `true`        |                            |

_Tab_

| Property Name | Attribute Name | Type     | Default Value | Description |
| ------------- | -------------- | -------- | ------------- | ----------- |
| `id`          | `id`           | `string` |               |             |

_Tab Panel_

| Property Name | Attribute Name | Type     | Default Value | Description |
| ------------- | -------------- | -------- | ------------- | ----------- |
| `id`          | `id`           | `string` |               |             |

#### Methods <a href="#methods" id="methods"></a>

_Example Table_

| Signature                                    | Description                                                                                                   |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `increment(value: number = this.step): void` | Increments the `value` of the component by the amount specified by `step`, clamped within `min`/`max` values. |
| `decrement(value: number = this.step): void` | Decrements the `value` of the component by the amount specified by `step`, clamped within `min`/`max` values. |

#### Events <a href="#events" id="events"></a>

_Example Table_

| Event Name | Detail Type | Bubbles | Composed | Cancellable | Dispatch Behavior                         |
| ---------- | ----------- | ------- | -------- | ----------- | ----------------------------------------- |
| `change`   | none        | `true`  | `true`   | `false`     | fires when component `activetab` updates. |

### Appearance <a href="#appearance" id="appearance"></a>

_Screenshots and/or description of the basic appearance of the component._

### Anatomy <a href="#anatomy" id="anatomy"></a>

_Outline the component's structure with a diagram of its render tree. Enumerate key areas of visual composition and customization._

#### Diagram <a href="#diagram" id="diagram"></a>

_Example_

![Example Diagram](../images/spec-diagram-example.png)

#### DOM Structure <a href="#dom-structure" id="dom-structure"></a>

_Template:_

```HTML
<div class="tabs" class="tabs">
    <slot class="start" name="start" part="start"></slot>
    <div class="tablist" part="tablist" role="tablist" aria-label="Sample Tabs">
        <button class="tab" part="tab" role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabindex="0">
            Tab One
        </button>
        <button class="tab" part="tab" role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">
            Tab Two
        </button>
        <button class="tab" part="tab" role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabindex="-1">
            Tab Three
        </button>
        <div class="activeindicator" part="activeindicator"></div>
    </div>
    <slot class="end" name="end" part="end"></slot>
    <div class="tabpanel" part="tabpanel" id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
        Content of the first tab
    </div>
    <div class="tabpanel" part="tabpanel" id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
        Content of the second tab
    </div>
    <div class="tabpanel" part="tabpanel" id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
        Content of the third tab
    </div>
</div>
```

#### Slots <a href="#slots" id="slots"></a>

_Tabs_

| Slot Name | Description | Fallback Content |
| --------- | ----------- | ---------------- |
| `start`   |             |
| `end`     |             |

_Tab_

| Slot Name | Description | Fallback Content |
| --------- | ----------- | ---------------- |
| `start`   |             |
| `end`     |             |

#### Host Classes <a href="#host-classes" id="host-classes"></a>

_What classes does the component add to the host element?_

| Class Name | Description |
| ---------- | ----------- |


#### Slotted Content Classes <a href="#slotted-content-classes" id="slotted-content-classes"></a>

_What classes on slotted content does the component respond to?_

| Class Name | Description |
| ---------- | ----------- |


#### CSS Parts <a href="#css-parts" id="css-parts"></a>

_Tabs_

| Part Name         | Description |
| ----------------- | ----------- |
| `tabs`            |             |
| `tablist`         |             |
| `tab`             |             |
| `tabpanel`        |             |
| `activeindicator` |             |

---

## Behavior <a href="#behavior" id="behavior"></a>

### States and Interactions <a href="#states-interactions" id="states-interactions"></a>

_Tabs_ can either be controlled or uncontrolled, meaning if `activeid` is passed the app author is taking control of the selected tab. When the `change` event fires it updates the `activeid` and pass a reference to the `activetab`.

_List key component states, valid state transitions, and how interactions trigger state transitions._

- _Are states changed as a result of keyboard? mouse? touch?_
- _Are there corresponding keyboard interactions for mouse/touch interactions?_
- _Are some events triggered on key down vs key press? On swipe?_

_Example Table_

| State Group | States         | Initial State | Description                                                                                                           | Interaction/Transition                       |
| ----------- | -------------- | ------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `disabled`  | `true`/`false` | `false`       | When `true`, disables the control, preventing user interaction and displaying the control with a disabled appearance. | No interaction. Controlled programmatically. |

### Accessibility <a href="#accessibility" id="accessibility"></a>

_Consider the accessibility of the component._

#### Keyboard Navigation and Focus <a href="#keyboard-navigation" id="keyboard-navigation"></a>

- _Arrow vs tabbing key behavior_
- _Modifier key effects (e.g. shift, ctrl, meta)_
- _Does this component use focus delegation?_
- _What is the behavior around disabled tabs?_
- _What is the behavior around tabs that move around in the UI (i.e. using flexbox order to move the active tab to be "first" in the tabgroup?_

- [WAI-ARIA Authoring Practices Keyboard Support](https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html#kbd_label)

_Example Table_

| Key       | Description                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Up/Right  | Increments the value of the component by calling the `increment` method. If the `shift` modifier is pressed, increases by 10x the `step` value. |
| Down/Left | Decrements the value of the component by calling the `decrement` method. If the `shift` modifier is pressed, decreases by 10x the `step` value. |

#### Form Input <a href="#form-input" id="form-input"></a>

_Does this component integrate with form submission, form validation, etc.? Can integration be accomplish with standard APIs or are special work-arounds required?_

#### Use with Assistive Technology <a href="#assistive-tech" id="assistive-tech"></a>

_Are there any details about shadow dom, focus delegation, or aria attributes that need special attention?_

### Globalization <a href="#globalization" id="globalization"></a>

_Tabs_ should mirror in RTL languages, meaning the tabs and tab content should flip direction.

### Security <a href="#security" id="security"></a>

_Are there any security implications surrounding the component?_

### Performance <a href="#performance" id="performance"></a>

_Are there any performance pitfalls or challenges with implementing the component? (examples below)_

- If the component renders a loop of items, should certain areas be considered for virtualization?
- If the component needs to measure an area before rendering, how will jank be avoided?
- If any measuring is needed at all, can rAF techniques help queue measures and prevent synchronous reflows?

## Dependencies <a href="#dependancies" id="dependancies"></a>

_Will implementing the component require taking on any dependencies?_

- _3rd party libraries_
- _Upcoming standards we need to polyfill_
- _Do any dependencies bring along an associated timeline?_

### Platform Requirements <a href="#platform-requirements" id="platform-requirements"></a>

_Are there any core web platform features that are needed to implement this component well?_

### Tooling <a href="#tooling" id="tooling"></a>

_Are there any special considerations for DevTools? Will tooling changes need to be made? Is there a special way to light up this component in DevTools that would be compelling for developers/designers?_

---

## Resources <a href="#resources" id="resources"></a>

- [WC3](https://w3c.github.io/aria-practices/#tabpanel)
- [MDN tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role)

---

## Next Steps <a href="#next-steps" id="next-steps"></a>

_What next steps, if any, are there? Is there some functionality that would be a nice-to-have or a common feature in other implementations that could be added but is not considered part of the MVP? Link all feature additions, modifications, bugs, or editorial change issues._
