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
        return <Carousel section={s} key={s.id} />;
      case "HEADING":
        return <Heading section={s} key={s.id} />;
      case "HERO":
        return <Hero section={s} key={s.id} />;
      case "SPLIT":
        return <Split section={s} key={s.id} />;
      case "DIVIDER":
        return <Divider section={s} key={s.id} />;
      case "TEXT_BLOCK":
        return <Textblock section={s} key={s.id} />;
      case "BLOCK_IMAGE":
        return <BlockImage section={s} key={s.id} />;
      case "CONTACT":
        return <Contact section={s} key={s.id} />;
      default:
        return null;
    }
  });
}
