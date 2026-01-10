import type { DropdownArgs } from './dropdown.types';

export const renderDropdown = (): string => `
    <div class="dropdown">
        <button class="dropdown-trigger" popovertarget="dropdown-options" aria-haspopup="menu" aria-expanded="false">
            Options
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
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
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
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
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        <ul class="dropdown-list" popover id="dropdown-playground" role="menu" aria-label="${label}">
            ${items
                .map(
                    (item) =>
                        `<li class="dropdown-list-item"><a class="dropdown-list-item-link" role="menuitem" href="#${item.toLowerCase().replace(/\s+/g, '-')}">${item}</a></li>`
                )
                .join('')}
        </ul>
    </div>
`;
