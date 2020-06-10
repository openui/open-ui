import { html, slotted } from "@microsoft/fast-element";
import { OuiListbox } from "./oui-listbox";

export const OuiListboxTemplate = html<OuiListbox>`
    <template>
        <div class="oui-listbox">Listbox<slot></slot></div>
    </template>
`;