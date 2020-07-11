import { html, slotted, ref } from "@microsoft/fast-element";
import { Select } from "./select";

export const SelectTemplate = html<Select>`
    <template
    @oui-option-selection-change="${(x, c) => {
            let v = (c.event.target as any).value;
            x.value = v;
            x.optionSelectionChange(v)
        }
    }"
    class="${x => (x.readOnly ? "readonly" : "")}" open="${x => x.open ? "" : null}"
    >
        <slot name="button-container">
            <button tabindex="0" part="button" aria-expanded="${x => x.open == true}" aria-haspopup="listbox" ${ref("button")}
            @keydown="${(x, c) => x.keypressHandlerButton(c.event as KeyboardEvent)}">
                <span part="selected-value">
                    <slot name="selected-value">${x => x.value}</slot>
                </slot>
            </button>
        </slot>
        <slot name="listbox-container"
        @keydown="${(x, c) => x.keypressHandlerListbox(c.event as KeyboardEvent)}">
            <!-- This is where the listbox part will be inserted -->
            <slot></slot>
        </slot>
    </template>
`;