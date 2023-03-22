import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React, { useEffect } from "react";
import Sections from "./Components/Sections";
import io from "socket.io-client";
import { Routes, Route, useLocation } from "react-router-dom";
import Guide from "./Components/Guide";
import Preloader from "./Components/Preloader";

const socket = io.connect("https://api.headlesshost.com");
const hhEndpoint = `https://api.headlesshost.com/sites/${process.env.REACT_APP_HH_SITE_ID}${process.env.REACT_APP_IS_PROD === "true" ? "" : "/draft"}`;

function App() {
  const [site, setSite] = React.useState();
  const location = useLocation();
  const pageIdentifier = location.pathname.substring(1);

  //Reload the site data after content updates
  useEffect(() => {
    socket.on(process.env.REACT_APP_HH_SITE_ID, async () => {
      try {
        const res = await fetch(hhEndpoint);
        const updatedSite = await res.json();
        setSite(updatedSite);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  //Scroll to the top when the page changes
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pageIdentifier]);

  //Load the site data on initial site load
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
  }, [site]);

  if (!site) return <Preloader />;

  const { content = {} } = site;
  const { pages = [], header = {}, footer = {}, globals = {} } = content;
  const page = pages.find((p) => p.identifier === pageIdentifier) || pages[0] || {};
  const { sections = [] } = page;
  const headervm = { ...header, globals };
  const footervm = { ...footer, globals };

  return (
    <>
      <Header viewModel={headervm} activePage={pageIdentifier} />
      <main>
        <Routes>
          <Route path="guide" element={<Guide />} />
          <Route path="*" element={<Sections sections={sections} />} />
        </Routes>
      </main>
      <Footer viewModel={footervm} />
    </>
  );
}

export default App;
