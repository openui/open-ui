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
    public open: boolean;

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

        this.buttonSlotUsed();

        this.updateForm();
    }

    private updateForm(): void {
    }

    
    public keypressHandlerButtonContainer = (e: KeyboardEvent): void => {
        super.keypressHandler(e);
        switch (e.keyCode) {
            // Space
            case 32:
                this.open = !this.open;
                this.updateButtonPartAttr();
                setTimeout(() => this.setFocusOnOption(), 0);
                break;
            // Enter
            case 13:
                this.open = !this.open;
                this.updateButtonPartAttr();
                setTimeout(() => this.setFocusOnOption(), 0);
                break;
            case 9:
                this.setFocusOnOption();
                break;
        }
    }

    /**
     * Handle keyboard interactions for listbox
     */
    private typeAheadValue: string = '';
    public keypressHandlerListbox = (e: KeyboardEvent): void => {
        super.keypressHandler(e);
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
            // Space
            case 32:
                // If you are in type ahead mode do not select option on space
                if (this.typeAheadValue != '') {
                    this.typeAheadValue = `${this.typeAheadValue}${e.key}`;
                    break;
                }

                this.value = options.current.value;
                options.current.checked = true;
                this.optionSelectionChange(options.current.value);
                this.updateButtonPartAttr();
                break;
            // Enter
            case 13:
                this.value = options.current.value;
                options.current.checked = true;
                this.optionSelectionChange(options.current.value);
                this.updateButtonPartAttr();
                break;
            // Escape
            case 27:
                options.current.removeAttribute('current');
                this.open = !this.open;
                this.updateButtonPartAttr();
                break;
            // Handle type ahead mode
            default:
                this.typeAheadValue = `${this.typeAheadValue}${e.key}`
                this.moveFocusToOptionBasedOnValue(this.typeAheadValue, options.options);
                console.log(this.typeAheadValue);
                break;
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
                // TODO: When you get to the end of the list it doesn't go back around to
                //       the first one.
                if (i == optionBag.options.length) {
                    optionBag.next = optionBag.options[0]
                }
                else {
                    optionBag.next = optionBag.options[currentIndex + 1]
                }

                currentIndex = i;

                // Set the previous option
                if (i == 0) {
                    optionBag.previous = optionBag.options[optionBag.options.length];
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
        return els;
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
    public buttonSlotUsed(): void {
        let slot = this.shadowRoot.querySelector('slot[name=button-container]');
        if (slot) {
            slot.addEventListener('slotchange', () => {
                let button = this.getElement('[part=button]');
                if (button) {
                    button.setAttribute('tabindex', "0");
                    button.setAttribute('aria-haspopup', 'true');
                    button.setAttribute('aria-expanded', 'false');
                    button.setAttribute('role', 'button');
                }
            });
        }
    }

    private regexEscape(str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    }

    /**
     * This will move focus to an attribute based on the 
     * value. This is useful for searching scenarios
     * 
     * @param typeAheadValue 
     * @param options 
     */
    public moveFocusToOptionBasedOnValue(typeAheadValue, options) {
        let value = null;
        typeAheadValue = this.regexEscape(typeAheadValue);
        let pattern = `^(${typeAheadValue})`;
        let re = new RegExp(pattern, "gi");

        options.forEach(option => {
            if (!value) {
                let matches = option.value.match(re);

                if (matches) { 
                    value = option;
                }
            }
        });

        return this.setFocusOnOption(value);
    }
}