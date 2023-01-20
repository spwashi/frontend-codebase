import React from 'react';

type INavLink = {
    href: string;
    title: string;
    children?: INavLink[];
};

function NavLink({link}: { link: INavLink }) {
    return (
        <li>
            <a href={'/'}>{link.title}</a>
            {
                link.children
                ? <Navigation items={link.children}/>
                : null
            }
        </li>
    );
}
export function Navigation({items}: { items: INavLink[] }) {
    return (
        <ul>
            {items.map(link => <NavLink link={link} key={link.title}/>)}
        </ul>
    );
}