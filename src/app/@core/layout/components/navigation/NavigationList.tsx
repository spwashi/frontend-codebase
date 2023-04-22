import React from "react";

import { INavLinkConfig } from "@/routes/types/linkConfig";

function NavLink({ link }: { link: INavLinkConfig }) {
  return (
    <li>
      <a href={"/"}>{link.title}</a>
      {link.children ? <NavigationList items={link.children} /> : null}
    </li>
  );
}

export function NavigationList({ items }: { items: INavLinkConfig[] }) {
  return (
    <ul>
      {items.map((link) => (
        <NavLink link={link} key={link.title} />
      ))}
    </ul>
  );
}
