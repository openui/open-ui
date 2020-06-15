import { attr, observable } from "@microsoft/fast-element";
import { keyCodeSpace } from "@microsoft/fast-web-utilities";
import { FormAssociated } from "../form-associated/index";
import { customElement } from "@microsoft/fast-element";
import { OuiOptionStyles as styles } from "./oui-option.styles";
import { OuiOptionTemplate as template } from "./oui-option.template"

@customElement({
    name: "oui-option",
    template,
    styles,
})

export class OuiOption extends FormAssociated<HTMLInputElement> {
    protected proxy: HTMLInputElement;
    @attr({ attribute: "readonly", mode: "boolean" })
    public readOnly: boolean; // Map to proxy element

    /**
     * The element's value to be included in form submission when checked.
     */
    public value: string = ""; // Map to proxy element.
    private valueChanged(): void {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.value = this.value;
        }
    }

    @attr({ attribute: "checked", mode: "boolean" })
    public checkedAttribute: boolean;
    private checkedAttributeChanged(): void {
        this.defaultChecked = this.checkedAttribute;
    }

    @observable
    public defaultChecked: boolean = !!this.checkedAttribute;
    private defaultCheckedChanged(): void {
        if (!this.dirtyChecked) {
            // Setting this.checked will cause us to enter a dirty state,
            // but if we are clean when defaultChecked is changed, we want to stay
            // in a clean state, so reset this.dirtyChecked
            this.checked = this.defaultChecked;
            this.dirtyChecked = false;
        }
    }

    /**
     * The checked state of the control
     */
    @observable
    public checked: boolean = this.defaultChecked;
    private checkedChanged(): void {
        if (!this.dirtyChecked) {
            this.dirtyChecked = true;
        }

        if (this.proxy instanceof HTMLElement) {
            this.proxy.checked = this.checked;
        }

        if (this.constructed) {
            this.$emit("change");
        }
    }

    /**
     * Tracks whether the "checked" property has been changed.
     */
    private dirtyChecked: boolean = false;

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
    }

    public keypressHandler = (e: KeyboardEvent): void => {
        super.keypressHandler(e);
        console.log('button pressed');
        switch (e.keyCode) {
            case keyCodeSpace:
                console.log('space pressed');
                break;
        }
    };

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    public clickHandler = (e: MouseEvent): void => {
        (this.checked) ? this.checked = false : this.checked = true;
        console.log(this.checked);
        this.$emit("oui-option-selection-change");
    };
}