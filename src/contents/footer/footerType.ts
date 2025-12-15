export interface LINK {
    id: number;
    link: string;
    value: string;
}

export interface NavItem {
    id: number;
    linkId: string,
    navItem: string
}

export interface NavItemSingle {
    linkId: string,
    navItem: string
}
