import React from "react";

import { INavLinkConfig } from "@identities/routes/types/linkConfig";

function NavLink({ link }: { link: INavLinkConfig }) {
  return (
    <li>
      <a href={link.href}>{link.title}</a>
      {link.sub ? <NavigationList items={Object.values(link.sub)} /> : null}
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
