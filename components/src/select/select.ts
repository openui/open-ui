import { attr, observable } from "@microsoft/fast-element";
import { keyCodeSpace } from "@microsoft/fast-web-utilities";
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

    /**
     * The element's
     */
    public value: string = "Selected Value"; // Map to proxy element.
    private valueChanged(): void {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.value = this.value;
        }
    }

    /**
     * Provides the default state of open
     */
    @attr({ attribute: "open", mode: "boolean" })
    public openAttribute: boolean;
    private openAttributeChanged(): void {
        this.defaultOpen = this.openAttribute;
    }

    @observable
    public defaultOpen: boolean = !!this.openAttribute;
    private defaultOpenChanged(): void {
        if (!this.dirtyOpen) {
            // Setting this.open will cause us to enter a dirty state,
            // but if we are clean when defaultChecked is changed, we want to stay
            // in a clean state, so reset this.dirtyOpen
            this.open = this.defaultOpen;
            this.dirtyOpen = false;
        }
    }

    /**
     * Tracks whether the "open" property has been changed.
     */
    private dirtyOpen: boolean = false;

    @observable
    public open: boolean = this.defaultOpen;
    private openChanged(): void {
        if (!this.dirtyOpen) {
            this.dirtyOpen = true;
        }

        if (this.constructed) {
            this.$emit("change");
        }
    }

    @observable
    public defaultSlottedNodes: Node[];

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

        this.updateForm();
    }

    private updateForm(): void {
    }

    public keypressHandler = (e: KeyboardEvent): void => {
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
                this.optionSelectionChange(options.current.value);
                break;
            // Enter
            case 13:
                this.optionSelectionChange(options.current.value);
                break;
            // Escape
            case 27:
                options.current.removeAttribute('current');
                this.open = !this.open;
                break;
        }
    };

    public moveOption(direction: string, options: any) {
        switch(direction) {
            case "next":
                options.current.removeAttribute('current');
                options.next.setAttribute('current', "");
                break;
            case "prev":
                case "next":
                options.current.removeAttribute('current');
                options.previous.setAttribute('current', "");
                break;
        }
    }

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    public clickHandler = (e: MouseEvent): void => {
        if (!this.disabled && !this.readOnly) {
            this.open = !this.open;

            if (this.open == true) {
                this.setFocusOnOption();
            }
        }
    };

    public getOptions = (): any => {
        let optionBag = {
            "options": null,
            "current": null,
            "previous": null,
            "next": null
        }

        optionBag.options = this.getElements("oui-option");

        for (let i: number = 0; i < optionBag.options.length; i++) {
            let el = optionBag.options[i]
            let currentIndex = i;
            if (el.hasAttribute('current')) {
                optionBag.current = el;

                // Set the next option
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
        }

        return optionBag;
    }

    public setFocusOnOption = (): void => {
        let option = this.getFirstSelectedOption();

        if (option) {
            option.setAttribute('current', "");
            option.focus();
        }
    }

    public getElements(selector: string) {
        let els = this.querySelectorAll(selector);
        if (els.length === 0) {
            els = this.shadowRoot.querySelectorAll(selector);
        }
        return els;
    }

    public getElement(selector: string) {
        let el = this.querySelector(selector);
        if (!el) {
            el = this.shadowRoot.querySelector(selector);
        }
        return el;
    }

    public getCurrentOption(): HTMLInputElement {
        // Set focus to the first option that has a state of checked
        let option = this.getElement('oui-option[current]') as HTMLInputElement;

        // If no option is currently set as current, get the first element
        if (!option) {
            option = this.getElement('oui-option') as HTMLInputElement;
        }

        return option;
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
        this.updateSelectValue(value);
        this.open = !this.open;
    }
}