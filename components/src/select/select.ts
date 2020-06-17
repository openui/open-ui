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
        switch (e.keyCode) {
            case keyCodeSpace:
                console.log('space pressed');
                break;
        }
    };

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    public clickHandler = (e: MouseEvent): void => {
        if (!this.disabled && !this.readOnly) {
            this.open = !this.open;

            if (this.open == true) {
                this.setFocusOnOption();
            }
        }
    };

    public setFocusOnOption = (): void => {
        // Set focus to the first option that has a state of checked
        let option = this.getElement('oui-option[checked]') as HTMLInputElement;

        // If no option is currently checked set it to the first element
        if (!option) {
            option = this.getElement('oui-option') as HTMLInputElement;
        }

        if (option) {
            option.focus();
        }
    }

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
        let selectedValue = this.getElement('[part=selected-value]');
        if (selectedValue) selectedValue.textContent = value;
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