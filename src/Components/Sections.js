import React from "react";
import BlockImage from "./BlockImage";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Divider from "./Divider";
import Heading from "./Heading";
import Hero from "./Hero";
import Split from "./Split";
import Textblock from "./Textblock";

export default function Sections({ sections }) {
  return sections.map((s) => {
    switch (s.type) {
      case "CAROUSEL":
        return <Carousel section={s} />;
      case "HEADING":
        return <Heading section={s} />;
      case "HERO":
        return <Hero section={s} />;
      case "SPLIT":
        return <Split section={s} />;
      case "DIVIDER":
        return <Divider section={s} />;
      case "TEXT_BLOCK":
        return <Textblock section={s} />;
      case "BLOCK_IMAGE":
        return <BlockImage section={s} />;
      case "CONTACT":
        return <Contact section={s} />;
      default:
        return null;
    }
  });
}
