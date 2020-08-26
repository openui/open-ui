import { attr, observable } from "@microsoft/fast-element";
import { FormAssociated } from "../form-associated/index";
import { customElement } from "@microsoft/fast-element";
import { CheckboxStyles as styles } from "./select.styles";
import { SelectTemplate as template } from "./select.template"

@customElement({
    name: "oui-select",
    template,
    styles,
})

export class Select extends FormAssociated<HTMLInputElement> {
    protected proxy: HTMLInputElement;
    @attr({ attribute: "readonly", mode: "boolean" })
    public readOnly: boolean; // Map to proxy element

    @attr({ attribute: "multiple", mode: "boolean" })
    public multiple: boolean;

    @attr({ attribute: "open", mode: "boolean" })
    @observable
    public open: boolean;
    private openChanged() {
        this.updateButtonPartAttr();
    }

    @observable
    public defaultSlottedNodes: Node[];

    @observable
    public button: HTMLElement;
    private buttonChanged(prev: HTMLElement) {
        this.button.addEventListener("click", this.clickHandler);
    }

    // TODO: This needs to change to support multiple values
    public value: string = "Selected Value"; // Map to proxy element.
    private valueChanged(): void {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.value = this.value;
        }
    }

    /**
     * Set to true when the component has constructed
     */
    private constructed: boolean = false;

    constructor() {
        super();
        this.constructed = true;
    }

    public connectedCallback(): void {
        super.connectedCallback();

        this.registerButtonSlotChange();
        this.registerListboxSlotChange();

        // We won't get a slotchange for event for parts that were not replaced
        // by user-provided parts, so apply their controller code here.
        this.applyButtonControllerCode();
        this.applyListboxControllerCode();

        this.updateForm();
    }

    private updateForm(): void {
    }

    
    public keypressHandlerButton = (e: KeyboardEvent): void => {
        super.keypressHandler(e);
        switch (e.keyCode) {
            // Space
            case 32:
                this.open = !this.open;
                setTimeout(() => this.setFocusOnOption(), 0);
                break;
            // Enter
            case 13:
                this.open = !this.open;
                setTimeout(() => this.setFocusOnOption(), 0);
                e.preventDefault(); // Enter also causes 'click' to fire for <button>s.  Prevent that so we don't immediately revert the change to this.open.
                break;
            case 9:
                this.setFocusOnOption();
                break;
        }
    }

    /**
     * Handle keyboard interactions for listbox
     */
    public keypressHandlerListbox = (e: KeyboardEvent): void => {
        super.keypressHandler(e);
        
        // Don't scroll the page for arrow keys, and spacebar.
        e.preventDefault();
        
        let options = this.getOptions();
        switch (e.keyCode) {
            // Down
            case 40:
                this.moveOption("next", options);
                break;
            // Up
            case 38:
                this.moveOption("prev", options);
                break;
            // Enter
            case 13:
                this.value = options.current.value;
                options.current.checked = true;
                this.optionSelectionChange(options.current.value);
                break;
            // Escape
            case 27:
                options.current.removeAttribute('current');
                this.open = !this.open;
                break;
            // Handle type ahead mode
            default:
                if (/^.$/.test(e.key)) {
                    this.handleTypeAhead(e.key);
                }
                break;
        }
    };

    /**
     * Set state to closed when focus moves away from the listbox ("light dismiss").
     * With this implementation, clicking on non-focusable content inside
     * the listbox will cause it to close (e.relatedTarget will be null).
     * This issue is not trivially remedied (see https://github.com/WICG/open-ui/issues/137).
     * But, this behavior works sufficiently well for the current set of examples.
     */
    public focusoutHandlerListbox = (e: FocusEvent): void => {
        const listbox = this.getListbox();
        const elementReceivingFocus = e.relatedTarget as HTMLElement;

        if (this.open && (!elementReceivingFocus || !listbox.contains(elementReceivingFocus))) {
            this.open = false;
        }
    };

    /**
     * Set which option has the 'current' attribute based on keyboard
     * direction input. I'm not sure * if there is a need for this
     * attribute in a standard. Once I get * focus fully working I'll
     * determine if we need this or not
     *
     * @param direction
     * @param options
     */
    public moveOption(direction: string, options: any) {
        switch(direction) {
            case "next":
                options.current.removeAttribute('current');
                options.next.setAttribute('current', "");
                options.next.focus();
                break;
            case "prev":
                options.current.removeAttribute('current');
                options.previous.setAttribute('current', "");
                options.previous.focus();
                break;
        }
    }

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    public clickHandler = (e: MouseEvent): void => {
        if (!this.disabled && !this.readOnly) {
            this.open = !this.open;

            if (this.open) {
                setTimeout(() => this.setFocusOnOption(), 0);
            }
        }
    };

    /**
     * This will only allow a selection of multiple values if the
     * multiple attribute is set
     */
    public handleMultiple = (value: string): void => {
        if (!this.multiple) {
            let optionBag = this.getOptions();
            optionBag.options.forEach(element => {
                if (element.value != this.value && element.hasAttribute('checked')) {
                    element.removeAttribute('checked');
                }
            });
        }
    }

    public getButton() {
        return this.getElement('[part=button]');
    }

    public getListbox() {
        return this.getElement('oui-listbox'); // TODO: Or look for part="listbox"?
    }

    /**
     * To allow for options to be anywhere within the select and also
     * ensure that the behaviors work and avoid needing to do additional
     * queries this creates a general options object to gather them.
     */
    public getOptions = (): any => {
        let optionBag = {
            "options": null,
            "current": null,
            "previous": null,
            "checked": [],
            "next": null
        }

        optionBag.options = this.getElements("oui-option");

        for (let i: number = 0; i < optionBag.options.length; i++) {
            let el = optionBag.options[i]
            let currentIndex = i;
            if (el.hasAttribute('current')) {
                optionBag.current = el;

                // Set the next option
                if (i == (optionBag.options.length - 1)) {
                    optionBag.next = optionBag.options[0]
                }
                else {
                    optionBag.next = optionBag.options[currentIndex + 1]
                }

                currentIndex = i;

                // Set the previous option
                if (i == 0) {
                    optionBag.previous = optionBag.options[optionBag.options.length - 1];
                }
                else {
                    optionBag.previous = optionBag.options[currentIndex - 1];
                }
            }

            if (el.hasAttribute('checked')) {
                optionBag.checked.push(el);
            }
        }

        return optionBag;
    }

    /**
     * Will set focus to the necessary element
     * TODO: This will probably get removed by moveOption
     */
    public setFocusOnOption = (optionToFocus = null): void => {
        let option = optionToFocus;
        let options = this.getOptions();

        if (!option) {
            option = this.getFirstSelectedOption();
        }

        if (option) {
            if (options.current) options.current.removeAttribute('current');
            option.setAttribute('current', "");
            option.focus();
        }
    }

    public updateButtonPartAttr(): void {
        let button = this.getElement('[part=button]');

        switch(this.open) {
            case true:
                button.setAttribute('aria-expanded', 'true');
                break;
            case false:
                button.setAttribute('aria-expanded', 'false');
                break;
        }
    }

    /**
     * Gathers elements within the select that match the selector param
     * @param selector
     */
    public getElements(selector: string) {
        let els = this.querySelectorAll(selector);
        if (els.length === 0) {
            els = this.shadowRoot.querySelectorAll(selector);
        }
        return Array.from(els);
    }

    /**
     * Returns the first element that matches the selector param
     *
     * @param selector
     */
    public getElement(selector: string) {
        let el = this.querySelector(selector);
        if (!el) {
            el = this.shadowRoot.querySelector(selector);
        }
        return el;
    }

    /**
     * This will update the text that is in the select's
     * button by default that renders the selected value
     *
     * @param value This is the value for the <option>
     */
    private updateSelectValue(value: string) {
        this.value = value;

        let selectedValue = this.getElement('[part=selected-value]');
        if (selectedValue) selectedValue.textContent = value;
    }

    private getFirstSelectedOption(): HTMLInputElement {
        // Set focus to the first option that has a state of checked
        let option = this.getElement('oui-option[checked]') as HTMLInputElement;

        // If no option is currently checked set it to the first element
        if (!option) {
            option = this.getElement('oui-option') as HTMLInputElement;
        }

        return option;
    }

    /**
     * When a user clicks on an option we need to update the known
     * parts of
     * - currently selected value
     * - array of values
     */
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    public optionSelectionChange(value: string): void {
        let options = this.getOptions();

        this.handleMultiple(value);

        options.options.forEach(element  => {
            if (element.value != value) element.removeAttribute('current');
        });

        this.updateSelectValue(value);
        this.typeAheadValue = '';
        this.open = !this.open;
    }

    /**
     * When the author leverages the slot we need to ensure that the a11y and
     * functionality that is tied to the given part still function as designed
     */
    public registerButtonSlotChange(): void {
        let slot = this.shadowRoot.querySelector('slot[name=button-container]');
        if (slot) {
            slot.addEventListener('slotchange', () => {
                this.applyButtonControllerCode();
            });
        }
    }

    /**
     * When the author leverages the slot we need to ensure that the a11y and
     * functionality that is tied to the given part still function as designed
     */
    public registerListboxSlotChange(): void {
        let slot = this.shadowRoot.querySelector('slot[name=listbox-container]');
        if (slot) {
            slot.addEventListener('slotchange', () => {
                this.applyListboxControllerCode();
            });
        }
    }

    private applyButtonControllerCode(): void {
        let button = this.getButton();
        if (button) {
            button.setAttribute('tabindex', '0');
            button.setAttribute('aria-haspopup', 'listbox');
            button.setAttribute('aria-expanded', this.open ? 'true' : 'false');
            button.setAttribute('role', 'button');

            button.addEventListener('click', this.clickHandler);
            button.addEventListener('keydown', this.keypressHandlerButton);
        }
    }

    private applyListboxControllerCode(): void {
        let listbox = this.getListbox();
        if (listbox) {
            listbox.setAttribute('role', 'listbox');
            listbox.addEventListener('keydown', this.keypressHandlerListbox);
            listbox.addEventListener('focusout', this.focusoutHandlerListbox);
        }
    }

    private regexEscape(str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    }

    /**
     * Move focus to an option whose label matches characters typed by the user.
     * Consecutive keystrokes are batched into a buffer of search text used
     * to match against the set of options.  If TYPE_AHEAD_TIMEOUT_MS passes
     * between consecutive keystrokes, the search restarts.
     * 
     * @param typedKey
     */
    private typeAheadValue: string = '';
    private typeAheadTimeoutHandler: number = -1;
    private typeAheadExpired: boolean = false;
    private static readonly TYPE_AHEAD_TIMEOUT_MS = 1000;
    public handleTypeAhead(typedKey) {
        // For every keystroke, reset the timer that triggers when enough
        // time has elapsed such that the search should restart.
        window.clearTimeout(this.typeAheadTimeoutHandler);
        this.typeAheadTimeoutHandler = window.setTimeout(() => {
            this.typeAheadExpired = true;
        }, Select.TYPE_AHEAD_TIMEOUT_MS);

        if (this.typeAheadExpired) {
            this.typeAheadValue = '';
        }

        this.typeAheadValue = `${this.typeAheadValue}${typedKey}`;

        let options = this.getOptions().options;
        let focusedIndex = options.indexOf(document.activeElement);
        let searchStartOffset = this.typeAheadExpired ? 1 : 0;
        // Try to match first against options that come after the currently
        // selected option. If none of those match, loop back around starting
        // from the top of the list. If we're in the middle of a search,
        // continue matching against the currently focused option before moving
        // on to the next option.
        let optionsForSearch =
            options.slice(focusedIndex + searchStartOffset, options.length)
            .concat(options.slice(0, focusedIndex + searchStartOffset));

        let pattern = `^(${this.regexEscape(this.typeAheadValue)})`;
        let re = new RegExp(pattern, "gi");

        for (const option of optionsForSearch) {
            // Match against the visible text of the option, rather than
            // the 'value' attribute. For a real <option> element, the
            // 'label' property could be used here.
            // Chromium/Firefox's native <select>s ignore whitespace at the
            // beginning/end of the visible text when matching, so trim()
            // the search text to align with that behavior.
            let matches = option.innerText.trim().match(re);

            if (matches) {
                this.setFocusOnOption(option);
                break;
            }
        }

        this.typeAheadExpired = false;
    }
}