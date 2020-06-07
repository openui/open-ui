import { html, slotted } from "@microsoft/fast-element";
import { Select } from "./select";

export const SelectTemplate = html<Select>`
    <template>
        <div class="oui-select" tabindex="0"><slot></slot></div>
    </template>
`;