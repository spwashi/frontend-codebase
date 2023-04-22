import React from "react";
import { INavLink } from "@junction/routes/routes";

function NavLink({ link }: { link: INavLink }) {
  return (
    <li>
      <a href={"/"}>{link.title}</a>
      {link.children ? <NavigationList items={link.children} /> : null}
    </li>
  );
}

export function NavigationList({ items }: { items: INavLink[] }) {
  return (
    <ul>
      {items.map((link) => (
        <NavLink link={link} key={link.title} />
      ))}
    </ul>
  );
}
