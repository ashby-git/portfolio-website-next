import React from "react";

import { AccomplishmentsData } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import * as S from "./AccomplishmentsStyles";

const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle main>Personal Achievements</SectionTitle>
    <S.Boxes>
      {AccomplishmentsData.map((card, index) => (
        <S.Box key={index}>
          <S.BoxNum>{`${card.number}+`}</S.BoxNum>
          <S.BoxText>{card.text}</S.BoxText>
        </S.Box>
      ))}
    </S.Boxes>
  </Section>
);

export default Accomplishments;
