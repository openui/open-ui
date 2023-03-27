# Open UI Charter

### Background

Since the beginning, web browsers have provided form controls and other website-level UI controls for web designers and developers to leverage in creating interfaces for their users. The web became what it is today precisely because websites are interactive. People search, select, log in, upload content, purchase, ask for what they need --- all through the power of controls.

Having the building blocks of user interfaces supplied by HTML makes it far easier for web developers to create interfaces for their users. Browser-supplied form and UI controls robustly respond to user needs. The same control can behave differently on different types of devices. They provide deep, accessible integration with all hardware and software. They adjust to unexpected conditions precisely because they are handled by the browser. 

The first set of form controls were specified in the early days of HTML, in [1993](https://www.w3.org/MarkUp/HTMLPlus/htmlplus_1.html). They allow for entering text, pressing buttons, uploading files, checking checkboxes, and selecting radio buttons. From the beginning, the visual design of these form controls has been dictated by the browser, often designed to blend in with the underlying operating system.

Over a decade later, by 2004--2008, it was clear more form and website-level UI controls were needed. "Web 2.0" had energized interactivity on the web, and designers were asking for user interfaces that HTML did not support. To implement these designs, web developers turned to third-party plugins like Flash, non-standard technology like ActiveX, or emerging frameworks like jQuery. As the culture of using the web ignited around the world, incredibly-common interaction design patterns became the new normal.

HTML5 was born of the idea of "[paving the cowpaths](https://www.w3.org/TR/html-design-principles/#pave-the-cowpaths)". The WHAT Working Group (WHATWG) [embarked](https://lists.w3.org/Archives/Public/public-html/2007Apr/0429.html) on an effort to take the most popular patterns, seen on millions of websites, and codify those patterns in HTML itself. Web developers would not need plug-ins or scripts, they could simply use HTML to create rich forms for entering a number, a URL, a password, or an email address; choosing a date and time; filling out a search field; picking a color; choosing a range from a slider; or choosing an item from a predefined list. For the first time, web developers could use HTML for creating placeholder text, specifying which field should capture focus, or making a form field required. The new HTML elements made it incredibly easy to build forms that are faster, more secure, and completely accessible.

But another 15 years have gone by since the last major revision to form and UI interfaces. Most complex web projects today need far more than what HTML5 form and UI controls provide. And so, all-too-often today's web developers turn to heavy JavaScript frameworks to build the user interfaces their designers are asking for. These custom interfaces are rarely fully accessible. They slow down the page, consume power, open security vulnerabilities and exclude people. 

Additionally, today's projects often reject existing built-in form and UI controls because they require more agency over the look and feel of the interface. Web designers demand the ability to express their project's branding across every element on the page, including all user interfaces. Current form and website-level UI controls do not allow for this.

### Vision

It's time to modernize HTML once again, and standardize the underlying technology needed by web developers to create the most common patterns of form and website-level UI controls. HTML alone won't be enough, however. New CSS and JavaScript are needed as well. And rather than simply standardize specific interfaces, it's time to create a more powerful underlying architecture so the creators of web sites and apps can design and build their own ideas for interfaces.

The Open UI Community Group is tasked with facilitating a larger architectural plan for how HTML, CSS, JS, and Web APIs can be combined to provide needed technology so web developers can create modern custom user interfaces. 

Once foundational planning is done, each needed web standard will be defined in the appropriate working group. Open UI is tasked with creating recommendations for those working groups, not defining the standards themselves. 

### Scope of work

The Open UI community group is focused on improving form controls and other website-level UI controls on the web by pursuing the following:

-   **Research**
    -   Document universal component patterns seen in popular 3rd-party web development frameworks.
    -   Capture commonly-used language for component names and parts, states, behaviors, and transition triggers.
    -   Conduct informal developer-facing user research.
    -   Discover gaps or bugs in what's possible with current web technology.
-   **Plan**
    -   Debate and define guiding Open UI Design Principles.
    -   Define developer needs discovered by research.
    -   Document group progress at [open-ui.org](https://open-ui.org/) and [github.com/openui/open-ui](https://github.com/openui/open-ui).
-   **Recommend**
    -   Write draft proposals for targeted improvements to form controls and other website-level UI controls, their styling, and behavior to HTML, CSS, JavaScript, Accessibility or Web APIs.
    -   Deliver the draft proposals as suggestions to the WHATWG, CSSWG, W3C, TC39 and other relevant standards bodies for further debate, adoption, and for implementation in browsers after becoming official HTML, CSS, JS, ARIA or Web API specifications. 
    -   Open issues for any bugs discovered with relevant browsers or working groups.

### Out of scope

-   Any design, innovation, invention or specification of novel or unique UI patterns or controls, or features that are iconic to a specific platform.
-   Any attempt to determine or specify the default look or behavior of these controls in the context of a particular operating system or hardware device.

# Getting Involved

We welcome everyone to get involved in Open UI, check out our [Get Involved](https://open-ui.org/get-involved/) page on our site on the ways in which you can engage with the community.

## Contributing

This repository is being used for work in the W3C Open UI Community Group, governed by the [W3C Community License
Agreement (CLA)](http://www.w3.org/community/about/agreements/cla/). To make substantive contributions,
you must join the [Open UI CG](https://www.w3.org/community/open-ui/) prior to making a PR.
