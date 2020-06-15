import { html, slotted } from "@microsoft/fast-element";
import { Select } from "./select";

export const SelectTemplate = html<Select>`
    <template
    tab-index="0"
    @oui-option-selection-change="${(x, c) => x.value = (c.event.target as any).value}"
    class="${x => (x.readOnly ? "readonly" : "")}" open="${x => x.open ? "" : null}"
    >
        <slot name="button-container">
            <button part="button"
                @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}"
            >
                <slot name="select-value">${x => x.value}</slot>
            </button>
        </slot>
        <slot name="listbox-container">
            <!-- This is where the listbox part will be inserted -->
            <slot></slot>
        </slot>
    </template>
`;