import { html, slotted } from "@microsoft/fast-element";
import { OuiOption } from "./oui-option";

export const OuiOptionTemplate = html<OuiOption>`
    <template
    tabindex="0"
    @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}"
    checked="${x => x.checked ? "" : null}">
        <slot></slot>
    </template>
`;