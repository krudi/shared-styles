import type { DropdownArgs } from './dropdown.types';

export const renderDropdown = (): string => `
    <div class="dropdown">
        <button class="dropdown-trigger" popovertarget="dropdown-options" aria-haspopup="menu" aria-expanded="false">
            Options
            <span class="dropdown-summary-icon" aria-hidden="true"></span>
        </button>
        <ul class="dropdown-list" popover id="dropdown-options" role="menu" aria-label="Options">
            <li class="dropdown-list-item"><a class="dropdown-list-item-link" role="menuitem" href="#profile">Profile</a></li>
            <li class="dropdown-list-item"><a class="dropdown-list-item-link" role="menuitem" href="#settings">Settings</a></li>
            <li class="dropdown-list-item"><a class="dropdown-list-item-link" role="menuitem" href="#logout">Log out</a></li>
        </ul>
    </div>
    <div class="dropdown">
        <button class="dropdown-trigger" popovertarget="dropdown-actions" aria-haspopup="menu" aria-expanded="false">
            Actions
            <span class="dropdown-summary-icon" aria-hidden="true"></span>
        </button>
        <ul class="dropdown-list" popover id="dropdown-actions" role="menu" aria-label="Actions">
            <li class="dropdown-list-item"><a class="dropdown-list-item-link" role="menuitem" href="#duplicate">Duplicate</a></li>
            <li class="dropdown-list-item"><a class="dropdown-list-item-link" role="menuitem" href="#archive">Archive</a></li>
            <li class="dropdown-list-item"><a class="dropdown-list-item-link" role="menuitem" href="#delete">Delete</a></li>
        </ul>
    </div>
`;

export const renderDropdownPlayground = ({ label, items }: DropdownArgs): string => `
    <div class="dropdown">
        <button class="dropdown-trigger" popovertarget="dropdown-playground" aria-haspopup="menu" aria-expanded="false">
            ${label}
            <span class="dropdown-summary-icon" aria-hidden="true"></span>
        </button>

        <ul id="dropdown-playground" class="dropdown-list" role="menu" aria-label="${label}" popover>
            ${items
                .map(
                    (item) =>
                        `<li class="dropdown-list-item"><a class="dropdown-list-item-link" role="menuitem" href="#${item.toLowerCase().replace(/\s+/g, '-')}">${item}</a></li>`
                )
                .join('')}
        </ul>
    </div>
`;
