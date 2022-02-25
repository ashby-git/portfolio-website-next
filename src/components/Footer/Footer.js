import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import * as S from "./FooterStyles";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.LinkList />
      <S.SocialIconsContainer>
        <S.CompanyContainer>
          <S.Slogan>Ashby McFall</S.Slogan>
        </S.CompanyContainer>
        <S.SocialContainer>
          <SocialIcons href="https://github.com/ashby-git">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/ashby-mcfall-063627158">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </S.SocialContainer>
      </S.SocialIconsContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
