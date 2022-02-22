import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I'm Ashby,
        <br />a React Developer
      </SectionTitle>
      <SectionText>
        A motivated and driven front end web developer specializing in React,
        who is dedicated to creating responsive, user-friendly and aesthetically
        pleasing web applications.
      </SectionText>
      <Button
        onclick={() => (window.location = "https://github.com/ashby-git")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
