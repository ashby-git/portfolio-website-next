import React from "react";

import * as S from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <S.GridContainer>
      {projects.map((project) => (
        <S.BlogCard key={project.id}>
          <S.Img src={project.image} />
          <S.TitleContent>
            <S.HeaderThree title>{project.title}</S.HeaderThree>
            <S.Hr />
          </S.TitleContent>
          <S.CardInfo>{project.description}</S.CardInfo>
          <S.Hr />
          <div>
            <S.TitleContent>Stack</S.TitleContent>
            <S.TagList>
              {project.tags.map((tag, i) => (
                <S.Tag key={i}>{tag}</S.Tag>
              ))}
            </S.TagList>
          </div>
          <S.UtilityList>
            <S.ExternalLinks href={project.visit}>Live Site</S.ExternalLinks>
            <S.ExternalLinks href={project.source}>Code</S.ExternalLinks>
          </S.UtilityList>
        </S.BlogCard>
      ))}
    </S.GridContainer>
  </Section>
);

export default Projects;
