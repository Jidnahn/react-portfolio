import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 0, text: "Mechanical Engineering degree" },
  { number: 0, text: "Data Science 4 All: Graduated with honors" },
  { number: 0, text: "MisiónTIC: Software Developer" },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, i) => (
        <Box key={i}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
