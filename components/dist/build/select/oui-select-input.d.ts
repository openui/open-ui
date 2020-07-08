import { FormAssociated } from "../form-associated/index";
export declare class OuiSelectInput extends FormAssociated<HTMLInputElement> {
    protected proxy: HTMLInputElement;
    readOnly: boolean;
    /**
     * The element's value to be included in form submission when checked.
     */
    value: string;
    private valueChanged;
    defaultSlottedNodes: Node[];
    /**
     * Set to true when the component has constructed
     */
    private constructed;
    constructor();
    connectedCallback(): void;
}
//# sourceMappingURL=oui-select-input.d.ts.map