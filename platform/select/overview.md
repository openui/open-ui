# Control Investigation
This document will outline the various investigation items
utilized to identify a manner in which to achieve a `<select>`
control that adheres to the core [pillars](https://github.com/WICG/form-controls-components#-key-pillars-for-a-solid-control-that-web-developers-will-use).

# Current State

* Styleability: [Mason Freed's exploration](https://docs.google.com/document/d/1Xa_k_MKfw4QnqHjjOKUW0HWGvgHmZeo7YWWCxTjKWBI/edit)

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

- **State**: Currently custom states for web components is in [proposal form](https://wicg.github.io/custom-state-pseudo-class/). Rather than jumping through too many hoops to replicate this I opted to 
put the state classes on the root custom element and change necessary styles as though this state was 
set.
