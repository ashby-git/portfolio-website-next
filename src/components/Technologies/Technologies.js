import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiFirebase,
  SiStyledcomponents,
  SiNextdotjs,
  SiFigma,
  SiAdobexd,
  SiGithub,
  SiTypescript,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import * as S from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
    </SectionText>
    <S.List>
      <S.ListItem>
        <S.IconWrapper>
          <SiReact size="3rem" />
          <SiRedux size="3rem" />
          <SiNextdotjs size="3rem" />
        </S.IconWrapper>
        <S.ListContainer>
          <S.ListTitle>
            Frameworks / <br />
            Libraries
          </S.ListTitle>
          <S.ListParagraph>
            Experience with React.js and it's partnering tools such as Redux,
            Redux-Toolkit, React-Router-Dom and Next.js
          </S.ListParagraph>
        </S.ListContainer>
      </S.ListItem>
      <S.ListItem>
        <S.IconWrapper>
          <SiHtml5 size="3rem" />
          <SiCss3 size="3rem" />
          <SiJavascript size="3rem" />
          <SiTypescript size="3rem" />
        </S.IconWrapper>
        <S.ListContainer>
          <S.ListTitle>Languages</S.ListTitle>
          <S.ListParagraph>
            Experience with front-end languages such as HTML, CSS, SASS,
            Javascript and Typescript.
          </S.ListParagraph>
        </S.ListContainer>
      </S.ListItem>
      <S.ListItem>
        <S.IconWrapper>
          <SiFirebase size="3rem" />
          <SiStyledcomponents size="3rem" />
          <SiFigma size="3rem" />
          <SiGithub size="3rem" />
        </S.IconWrapper>
        <S.ListContainer>
          <S.ListTitle>Other Tools</S.ListTitle>
          <S.ListParagraph>
            Experience with Firebase, Firestore. As well as working with other
            tools such as Styled-Components, Figma and Git workflows.
          </S.ListParagraph>
        </S.ListContainer>
      </S.ListItem>
    </S.List>
  </Section>
);

export default Technologies;
