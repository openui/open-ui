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
        console.log('button pressed');
        switch (e.keyCode) {
            case keyCodeSpace:
                console.log('space pressed');
                break;
        }
    };

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    public clickHandler = (e: MouseEvent): void => {
        console.log(this.value);
    };
}