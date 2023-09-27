import React, { useEffect } from "react";
import Preloader from "./Preloader";
import Sections from "./Sections";

const hhEndpoint = `https://api.headlesshost.com/sites/${process.env.REACT_APP_HH_SITE_ID}/guide`;

export default function Guide() {
  const [site, setSite] = React.useState();

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
          const { id } = resp;
          if (id) {
            setSite(resp);
          } else {
            console.log("Invalid content: " + resp);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [site]);

  if (!site) return <Preloader />;

  const { content = {} } = site;
  const { sections = [] } = content;

  return sections.map((s) => {
    return (
      <div style={{ borderBottom: "3px dashed #ccc" }} key={s.id}>
        <Sections sections={[s]} />
      </div>
    );
  });
}
