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

export class Select extends FormAssociated<HTMLSelectElement> {
    protected proxy: HTMLSelectElement;
    @attr({ attribute: "readonly", mode: "boolean" })
    public readOnly: boolean; // Map to proxy element

    /**
     * The element's value to be included in form submission when checked.
     * Default to "on" to reach parity with input[type="checkbox"]
     */
    public value: string = "o"; // Map to proxy element.
    private valueChanged(): void {
        if (this.proxy instanceof HTMLElement) {
            this.proxy.value = this.value;
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
        console.log(e);
    };
}