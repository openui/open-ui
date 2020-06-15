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
        console.log('button pressed');
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
        }
    };
}