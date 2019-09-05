# Standardized Form Controls and Components
The goal of this repo is to begin to standardize controls and components that ship natively within UAs.

# Overview
This will be a central repro that will help track individual specifications that will make their start in WICG and then ultimately land the respective pieces in the necessary WGs. This central repo is being created for a few reasons:

* Easy tracking of which ones we're actively investigating and their respective locations
* Discuss issues that span all of the controls & components
  * Where necessary we will close and direct these issues to the relevant WGs for discussion (eg: CSSWG, Web Components WG, WHATWG, TC39, etc)

# How it will work
We will take existing legacy controls and based on user feedback and testing we'll derive the top pain points to begin
addressing them with standardized solutions. As the pattern to bringing a new control
to the platform becomes more clear, I'll continue to update these steps.

# <a name="pillars"></a> Key pillars for a solid control that web developers will use
In discussions, customer & partner discussions, and surveys there are a few key aspects that we must deliver in order
for the native components and controls that the platform delivers to be heavily utilized. All of these don't have to land at once, but need to be considered so we don't back ourselves into a corner and create yet another control/component that is unusable.

* They need to be customizable
* Extensibility needs to be possible
* Behavior hook or adjustments needs to be possible
* State management across component, even in a composite component, is possible
* Expectation from developers that it "just works" (<-- we need to bring the magic back, even if built on primitives)
* Accessibilty, focus and other foundational items work as expected

# Controls to standardize (initial thinking)
* `<select>` || `<dropdown>` ( [Investigation](/select/overview.md) )
* `<file>` (modern replacement for input type="file")
* `<std-switch>` (proposal from Google is [here](https://github.com/tkent-google/std-switch))

# Resources
* [Initial thoughts on standardizing form controls](https://www.gwhitworth.com/blog/2019/07/form-controls-components/)
