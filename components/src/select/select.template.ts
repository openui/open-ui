import { html, slotted } from "@microsoft/fast-element";
import { Select } from "./select";
import { OuiListbox } from './oui-listbox';

export const SelectTemplate = html<Select>`
    <template
    tab-index="0"
    >
        <slot name="button-container">
            <button part="button"
            @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}"
            >
                <slot name="select-value">Selected Value</slot>
            </button>
        </slot>
        <slot name="listbox-container">
            <!-- This is where the listbox part will be inserted -->
            <slot></slot>
        </slot>
    </template>
`;