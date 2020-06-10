import { html, slotted } from "@microsoft/fast-element";
import { OuiOption } from "./oui-option";

export const OuiOptionTemplate = html<OuiOption>`
    <template>
        <div class="oui-option"><slot>Option</slot></div>
    </template>
`;