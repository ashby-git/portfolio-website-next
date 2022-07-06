import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import * as S from './FooterStyles';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.LinkList>
        <S.LinkColumn>
          <S.LinkTitle>Email</S.LinkTitle>
          <S.LinkItem href="mailto:ashbymcfall@hotmail.co.uk">
            ashbymcfall@hotmail.co.uk
          </S.LinkItem>
        </S.LinkColumn>
      </S.LinkList>
      <S.SocialIconsContainer>
        <S.CompanyContainer>
          <S.Slogan>
            “To travel, to experience and learn: that is to live” - Tenzing
            Norgay.{' '}
          </S.Slogan>
        </S.CompanyContainer>
        <S.SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/ashby-git">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://linkedin.com/in/ashby-mcfall-063627158"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </S.SocialContainer>
      </S.SocialIconsContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
