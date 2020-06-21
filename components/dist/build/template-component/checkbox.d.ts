import { FormAssociated } from "../form-associated/index";
export declare class Checkbox extends FormAssociated<HTMLInputElement> {
    readOnly: boolean;
    private readOnlyChanged;
    /**
     * The element's value to be included in form submission when checked.
     * Default to "on" to reach parity with input[type="checkbox"]
     */
    value: string;
    private valueChanged;
    /**
     * Provides the default checkedness of the input element
     * Passed down to proxy
     */
    checkedAttribute: boolean;
    private checkedAttributeChanged;
    defaultSlottedNodes: Node[];
    /**
     * Initialized to the value of the checked attribute. Can be changed independently of the "checked" attribute,
     * but changing the "checked" attribute always additionally sets this value.
     */
    defaultChecked: boolean;
    private defaultCheckedChanged;
    /**
     * The checked state of the control
     */
    checked: boolean;
    private checkedChanged;
    protected proxy: HTMLInputElement;
    /**
     * The indeterminate state of the control
     */
    indeterminate: boolean;
    /**
     * Tracks whether the "checked" property has been changed.
     * This is necessary to provide consistent behavior with
     * normal input checkboxes
     */
    private dirtyChecked;
    /**
     * Set to true when the component has constructed
     */
    private constructed;
    constructor();
    connectedCallback(): void;
    private updateForm;
    keypressHandler: (e: KeyboardEvent) => void;
    clickHandler: (e: MouseEvent) => void;
}
//# sourceMappingURL=checkbox.d.ts.map