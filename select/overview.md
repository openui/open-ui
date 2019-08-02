# Control Investigation
This document will outline the various investigation items
utilized to identify a manner in which to achieve a `<select>`
control that adheres to the core pillars.

# Use cases
Below are the usecases that web developers utilize a drop down
for and potential variations upon them.

**Note:** not all of the use cases or variations *have* to be solved
by the same control or at one time. The importance of listing them is
so that as a solution(s) begins to form we ensure that we do not back
ourselves into a corner that requires web developers to revert to re-creating
the control due to not being able to have it achieve what they need.

## ...Usecases will go here...

# Missing platform APIs
We will be investigating how the browser currently utililzes some magic
to create the current `<select>` control and determine if:
* **They are necessary:** Many of these controls were created in the early days of the
  web. We should understand what these solutions are providing end users and then, with
  data, make a determination if they should be added to the platform or removed.

* **Propose a solution:** If we decide that they are necessary, we should then break down that
  use case further to derive an explainer of the problem that will then be a launching off
  point for a proposal to the necessary standards body for review/feedback.