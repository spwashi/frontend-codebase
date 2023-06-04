import React from "react";

import { INavLinkConfig } from "@identities/routes/types/linkConfig";
import { Link } from "react-router-dom";

function NavLink({ link }: { link: INavLinkConfig }) {
  return (
    <li>
      <Link to={link.href}>{link.title}</Link>
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
