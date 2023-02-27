> This document represents a component specification template. Its purpose
> is to provide a point-in-time guide as to how a component should be
> authored, in light of common anatomies, behaviors, and accessibility.
> The primary audience is a developer authoring a given component.

# {ComponentName} Component Specification

## Overview <a href="#overview" id="overview"></a>

_The name of the component, along with a high-level description._

### Background <a href="#background" id="background"></a>

_Relevant historical or background information, related existing issues, etc._

### Use Cases <a href="#use-cases" id="use-cases"></a>

_Primary use cases for this component._

### Non-goals <a href="#non-goals" id="non-goals"></a>

_A list of use cases, features, or functionality which are **not** goals for the component._

### Features <a href="#features" id="features"></a>

_A list of the key features unique to this component._

### Risks and Challenges <a href="#risks" id="risks"></a>

_Notable risks or challenges associated with the component. Link issues related to platform blockers._

### Prior Art/Examples <a href="#prior-art" id="prior-art"></a>

_Link to the OpenUI research page for the component. If any existing, canonical, or exemplary implementations of the component are found beyond what is documented in the research page, make a separate PR to add them there._

---

## Design <a href="#design" id="design"></a>

_Describe the design of the component, thinking through several perspectives:_

- _A customer using the component on a web page._
- _A developer building an app with the component and interacting through HTML/CSS/JavaScript._
- _A designer customizing the component._

### API <a href="#api" id="api"></a>

_Outline the key elements of the component's public API surface, taking into consideration conformance guidelines. Make sure to discuss differences and rationalizations. Consider high and low-level APIs. Attempt to design a powerful and extensible low-level API with a high-level API for developer/designer ergonomics and simplicity._

#### Properties and Attributes <a href="#properties-attributes" id="properties-attributes"></a>

_Example Table_

| Property Name | Attribute Name | Type     | Default Value  | Description                      |
| ------------- | -------------- | -------- | -------------- | -------------------------------- |
| `value`       | `value`        | `number` | Value of `min` | The current value of the slider. |
| `min`         | `min`          | `number` | `0`            | The minimum value of the slider. |

#### Methods <a href="#methods" id="methods"></a>

_Example Table_

| Signature                                    | Description                                                                                                   |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `increment(value: number = this.step): void` | Increments the `value` of the component by the amount specified by `step`, clamped within `min`/`max` values. |
| `decrement(value: number = this.step): void` | Decrements the `value` of the component by the amount specified by `step`, clamped within `min`/`max` values. |

#### Events <a href="#events" id="events"></a>

_Example Table_

| Event Name | Detail Type | Bubbles | Composed | Cancellable | Dispatch Behavior                        |
| ---------- | ----------- | ------- | -------- | ----------- | ---------------------------------------- |
| `change`   | none        | `true`  | `true`   | `false`     | Fired when the slider's `value` changes. |

### Appearance <a href="#appearance" id="appearance"></a>

_Screenshots and/or description of the basic appearance of the component._

### Anatomy <a href="#anatomy" id="anatomy"></a>

_Outline the component's structure with a diagram of its render tree. Enumerate key areas of visual composition and customization._

#### Diagram <a href="#diagram" id="diagram"></a>

_Example_

![Example Diagram](../images/spec-diagram-example.png)

#### DOM Structure <a href="#dom-structure" id="dom-structure"></a>

_Define the recommended DOM to represent the component's anatomy, as shown above. Show how important attributes (aria attributes especially) are applied to the various parts. In cases where a component nests other components, expand the full DOM structure to understand the expectation and any shortcomings in the child components' customizability._

#### Slots <a href="#slots" id="slots"></a>

_What parts of the component are composable or replaceable?_

_Example Table_

| Slot Name | Description                                                        | Fallback Content                            |
| --------- | ------------------------------------------------------------------ | ------------------------------------------- |
| `thumb`   | Enables replacing the component's `thumb` part with custom markup. | A default thumb implementation is provided. |

#### Host Classes <a href="#host-classes" id="host-classes"></a>

_What classes does the component add to the host element?_

| Class Name | Description |
| ---------- | ----------- |


#### Slotted Content Classes <a href="#slotted-content-classes" id="slotted-content-classes"></a>

_What classes on slotted content does the component respond to?_

| Class Name | Description |
| ---------- | ----------- |


#### CSS Parts <a href="#css-parts" id="css-parts"></a>

_What parts of the component are exposed for styling?_

_Example Table_

| Part Name | Description                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| `thumb`   | Enables styling the `thumb` part without requiring it to be completely replaced via its slot. |

---

## Behavior <a href="#behavior" id="behavior"></a>

### States and Interactions <a href="#states-interactions" id="states-interactions"></a>

_List key component states, valid state transitions, and how interactions trigger state transitions._

- _Are states changed as a result of keyboard? mouse? touch?_
- _Are there corresponding keyboard interactions for mouse/touch interactions?_
- _Are some events triggered on key down vs key press?_

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

_Consider whether the component has any special globalization needs such as:_

- _Special RTL handling_
- _Swapping of internal icons/visuals_
- _Localization_

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

_Any related resource links such as web standards, discussion threads, diagrams, etc._

---

## Next Steps <a href="#next-steps" id="next-steps"></a>

_What next steps, if any, are there? Is there some functionality that would be a nice-to-have or a common feature in other implementations that could be added but is not considered part of the MVP? Link all feature additions, modifications, bugs, or editorial change issues._
