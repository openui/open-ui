import { FormAssociated } from "../form-associated/index";
export declare class Select extends FormAssociated<HTMLInputElement> {
    protected proxy: HTMLInputElement;
    readOnly: boolean;
    multiple: boolean;
    open: boolean;
    defaultSlottedNodes: Node[];
    button: HTMLElement;
    private buttonChanged;
    value: string;
    private valueChanged;
    /**
     * Set to true when the component has constructed
     */
    private constructed;
    constructor();
    connectedCallback(): void;
    private updateForm;
    keypressHandlerButtonContainer: (e: KeyboardEvent) => void;
    /**
     * Handle keyboard interactions for listbox
     */
    private typeAheadValue;
    keypressHandlerListbox: (e: KeyboardEvent) => void;
    /**
     * Set which option has the 'current' attribute based on keyboard
     * direction input. I'm not sure * if there is a need for this
     * attribute in a standard. Once I get * focus fully working I'll
     * determine if we need this or not
     *
     * @param direction
     * @param options
     */
    moveOption(direction: string, options: any): void;
    clickHandler: (e: MouseEvent) => void;
    /**
     * This will only allow a selection of multiple values if the
     * multiple attribute is set
     */
    handleMultiple: (value: string) => void;
    /**
     * To allow for options to be anywhere within the select and also
     * ensure that the behaviors work and avoid needing to do additional
     * queries this creates a general options object to gather them.
     */
    getOptions: () => any;
    /**
     * Will set focus to the necessary element
     * TODO: This will probably get removed by moveOption
     */
    setFocusOnOption: (optionToFocus?: any) => void;
    updateButtonPartAttr(): void;
    /**
     * Gathers elements within the select that match the selector param
     * @param selector
     */
    getElements(selector: string): NodeListOf<Element>;
    /**
     * Returns the first element that matches the selector param
     *
     * @param selector
     */
    getElement(selector: string): Element;
    /**
     * This will update the text that is in the select's
     * button by default that renders the selected value
     *
     * @param value This is the value for the <option>
     */
    private updateSelectValue;
    private getFirstSelectedOption;
    /**
     * When a user clicks on an option we need to update the known
     * parts of
     * - currently selected value
     * - array of values
     */
    optionSelectionChange(value: string): void;
    /**
     * When the author leverages the slot we need to ensure that the a11y and
     * functionality that is tied to the given part still function as designed
     */
    buttonSlotUsed(): void;
    private regexEscape;
    /**
     * This will move focus to an attribute based on the
     * value. This is useful for searching scenarios
     *
     * @param typeAheadValue
     * @param options
     */
    moveFocusToOptionBasedOnValue(typeAheadValue: any, options: any): void;
}
//# sourceMappingURL=select.d.ts.map