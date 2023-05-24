import { useToggle } from "@core/hooks/useToggle";
import { SiteButton } from "@core/sites/SiteButton";
import React, { useState } from "react";
import { SiteNameOption, siteNames } from "@core/sites/types";

export function AppRoot() {
  const [isActivated, toggleState] = useToggle();
  const [site, setSite] = useState<SiteNameOption>("boon");
  return (
    <main>
      <select onChange={(e) => setSite(e.target.value as SiteNameOption)}>
        {siteNames.map((name) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
      <SiteButton site={site} onClick={toggleState} isActivated={isActivated} />
    </main>
  );
}
