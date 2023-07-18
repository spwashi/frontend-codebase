import { useToggle } from "@core/hooks/useToggle";
import { SiteButton } from "@core/sites/SiteButton";
import React, { useEffect, useInsertionEffect, useState } from "react";
import { SiteNameOption, siteNames } from "@core/sites/types";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";
import { useLocation, useParams } from "react-router";

const siteName = import.meta.env.VITE_PROJECT_NAME;

interface SiteSelectParams {
  site: string;
  setSite: (param: SiteNameOption) => void;
}

function useQueryParams() {
  const { search } = useLocation();

  return React.useMemo(
    () => Object.fromEntries(new URLSearchParams(search)),
    [search]
  );
}

function SiteSelect({ site, setSite }: SiteSelectParams) {
  const params = useQueryParams();
  const domain = window.location.host;
  const siteChoice = params.site || domain.replace(".land", "");

  useEffect(() => {
    if (siteNames.indexOf(siteChoice as SiteNameOption) > -1) {
      setSite(siteChoice as SiteNameOption);
    }
  }, [siteChoice]);

  if (site && site === siteChoice) return null;
  return (
    <Feature name={featureIds.app.site_switcher}>
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
    </Feature>
  );
}

export function DefaultPage() {
  const [isActivated, toggleState] = useToggle();
  const [site, setSite] = useState<SiteNameOption>(siteName);
  return (
    <main>
      <SiteSelect site={site} setSite={setSite} />
      <SiteButton site={site} onClick={toggleState} isActivated={isActivated} />
    </main>
  );
}
