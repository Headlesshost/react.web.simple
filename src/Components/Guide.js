import React, { useEffect } from "react";
import Preloader from "./Preloader";
import Sections from "./Sections";
import { useGuideEndpoint } from "../_utils";

export default function Guide() {
  const [site, setSite] = React.useState();
  const hhEndpoint = useGuideEndpoint();
  useEffect(() => {
    async function fetchSite() {
      try {
        const res = await fetch(hhEndpoint);
        return await res.json();
      } catch (error) {
        console.log(error);
      }
    }
    if (!site) {
      fetchSite()
        .then((resp) => {
          setSite(resp);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [hhEndpoint, site]);

  if (!site) {
    return <Preloader />;
  }

  const { content = {} } = site;
  const { sections = [] } = content;

  return (
    <div className="mt-5 pt-5">
      <div className="ms-2">
        <h2>{site.name}</h2>
        <p>{site.notes}</p>
      </div>
      {sections.map((s) => (
        <div style={{ borderBottom: "3px dashed #ccc", padding: "20px 0 20px 0" }} key={s.id}>
          <div style={{ paddingLeft: "20px", fontWeight: "bold" }}>
            <small>{s.title}</small>
          </div>
          <Sections sections={[s]} />
        </div>
      ))}
    </div>
  );
}
