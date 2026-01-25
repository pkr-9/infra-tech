import { createContext, useContext, useEffect, useState } from "react";

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [site, setSite] = useState(null);

  useEffect(() => {
    fetch("/data/site.json")
      .then((res) => res.json())
      .then(setSite);
  }, []);

  if (!site) return null;

  return <SiteContext.Provider value={site}>{children}</SiteContext.Provider>;
}

export const useSite = () => useContext(SiteContext);
