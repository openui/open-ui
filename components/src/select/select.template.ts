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
            <button part="button" ${ref("button")}>
                <span part="selected-value">
                    <slot name="selected-value">${x => x.value}</slot>
                </slot>
            </button>
        </slot>
        <slot name="listbox-container">
            <!-- This is where the listbox part will be inserted -->
            <oui-listbox>
                <slot></slot>
            </oui-listbox>
        </slot>
    </template>
`;