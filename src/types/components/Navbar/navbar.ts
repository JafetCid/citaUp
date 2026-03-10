export interface Links {
    href: string;
    label: string;
    icon: React.ReactNode;
}

export interface PropsNavbar {
    navLinks: Links[];
    href?: string;
    showLogOut?: boolean;
}