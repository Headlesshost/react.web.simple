import React from "react";
import { useLocation } from "react-router-dom";

export function useSiteEndpoint() {
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  const siteInstance = process.env.REACT_APP_IS_PROD === "true" ? "" : query.get("instanceId") ? "/instance/" + query.get("instanceId") : "/draft";
  const hhEndpoint = React.useMemo(() => `${process.env.REACT_APP_HH_URL}/sites/${process.env.REACT_APP_SITE_ID}${siteInstance}`, [siteInstance]);
  return hhEndpoint;
}

export function useGuideEndpoint() {
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  const siteInstance = process.env.REACT_APP_IS_PROD === "true" ? "" : query.get("instanceId") ? "/instance/" + query.get("instanceId") : "";
  const hhEndpoint = React.useMemo(() => `${process.env.REACT_APP_HH_URL}/sites/${process.env.REACT_APP_SITE_ID}${siteInstance}/guide`, [siteInstance]);
  return hhEndpoint;
}
