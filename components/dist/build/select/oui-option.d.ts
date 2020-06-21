import { FormAssociated } from "../form-associated/index";
export declare class OuiOption extends FormAssociated<HTMLInputElement> {
    protected proxy: HTMLInputElement;
    readOnly: boolean;
    /**
     * The element's value to be included in form submission when checked.
     */
    value: string;
    private valueChanged;
    checkedAttribute: boolean;
    private checkedAttributeChanged;
    defaultChecked: boolean;
    private defaultCheckedChanged;
    /**
     * The checked state of the control
     */
    checked: boolean;
    private checkedChanged;
    /**
     * Tracks whether the "checked" property has been changed.
     */
    private dirtyChecked;
    defaultSlottedNodes: Node[];
    /**
     * Set to true when the component has constructed
     */
    private constructed;
    constructor();
    connectedCallback(): void;
    clickHandler: (e: MouseEvent) => void;
}
//# sourceMappingURL=oui-option.d.ts.map