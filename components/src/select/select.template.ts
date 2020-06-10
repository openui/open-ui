import { html, slotted } from "@microsoft/fast-element";
import { Select } from "./select";

export const SelectTemplate = html<Select>`
    <template
    @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}">
        <div class="oui-select" tabindex="0">Select<slot></slot></div>
    </template>
`;