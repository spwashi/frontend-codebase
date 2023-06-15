import React from "react";

import { IRouteConfig } from "@identities/routes/types/linkConfig";
import { Link } from "react-router-dom";

function NavLink({ link }: { link: IRouteConfig }) {
  return (
    <li>
      <Link to={link.href}>{link.title}</Link>
      {link.sub ? <NavigationList items={Object.values(link.sub)} /> : null}
    </li>
  );
}

export function NavigationList({ items }: { items: IRouteConfig[] }) {
  return (
    <ul>
      {items
        .filter((link) => link.title)
        .map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
    </ul>
  );
}
