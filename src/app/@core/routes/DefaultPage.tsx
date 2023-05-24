import { useToggle } from "@core/hooks/useToggle";
import { SiteButton } from "@core/sites/SiteButton";
import React, { useState } from "react";
import { SiteNameOption, siteNames } from "@core/sites/types";

const siteName = import.meta.env.VITE_PROJECT_NAME;
export function DefaultPage() {
  const [isActivated, toggleState] = useToggle();
  const [site, setSite] = useState<SiteNameOption>(siteName);
  return (
    <main>
      <select
        value={site}
        onChange={(e) => setSite(e.target.value as SiteNameOption)}
      >
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
