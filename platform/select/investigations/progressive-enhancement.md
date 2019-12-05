# Progressive Enhancement of the Select Control

In building a new `<select>` control, a key consideration is progressive enhancement—that is, ensuring that users with browsers that do not yet support the new `<select>` can fall back to the old implementation without issue. The purpose of this page is to verify this principle, i.e. that if arbitrary HTML content is inserted into the `<select>`, the control will strip out all non-text content and still function.

This was verified by creating a representative case of a `<select>` with an image, flexbox, and button within its options ([see code](https://jsbin.com/wojadajide/edit?html,output)) and testing across browsers on desktop and mobile.

## Desktop
### Chrome on Windows
![Progressive Enhancement - Chrome on Windows](images/prog-enhancement-chrome-windows.png)

### Firefox on Windows
![Progressive Enhancement - Firefox on Windows](images/prog-enhancement-firefox-windows.png)

### EdgeHTML on Windows
![Progressive Enhancement - EdgeHTML on Windows](images/prog-enhancement-edge-html-windows.png)

### Safari on Mac
![Progressive Enhancement - Safari on Windows](images/prog-enhancement-safari-mac.png)

## Mobile
Note that both iOS and Android prompt a native UI for operating the `<select>`, which inherently limits its potential for customization with non-text content compared to desktop.
### iOS
![Progressive Enhancement - iOS](images/prog-enhancement-ios.png)

### Android
![Progressive Enhancement - Android](images/prog-enhancement-android.png)
