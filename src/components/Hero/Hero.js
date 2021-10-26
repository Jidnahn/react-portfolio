import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, <br />
        My name is Juan Ramírez
      </SectionTitle>
      <SectionText>
        I am a Mechanical Engineer and Software Developer passionate about
        technology. My main working stack is React and Node.js, however I am
        capable or adapting to different languages and libraries as needed for
        the occasion. I am mainly a front-end developer but can also work as
        both back-end and full-stack developer.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
