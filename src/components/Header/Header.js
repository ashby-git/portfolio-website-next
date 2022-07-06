import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import * as S from './HeaderStyles';

const Header = () => (
  <S.Container>
    <S.Div1>
      <Link href="/">
        <S.NavTitleLink>
          <img src={'/favicon.ico'} />
          <S.Span>Ashby McFall</S.Span>
        </S.NavTitleLink>
      </Link>
    </S.Div1>
    <S.Div2>
      <li>
        <Link href="#projects">
          <S.NavLink>Projects</S.NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <S.NavLink>Technologies</S.NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <S.NavLink>About</S.NavLink>
        </Link>
      </li>
    </S.Div2>
    <S.Div3>
      <S.SocialIcons target="_blank" href="https://github.com/ashby-git">
        <AiFillGithub size="3rem" />
      </S.SocialIcons>
      <S.SocialIcons
        target="_blank"
        href="https://linkedin.com/in/ashby-mcfall-063627158"
      >
        <AiFillLinkedin size="3rem" />
      </S.SocialIcons>
    </S.Div3>
  </S.Container>
);
export default Header;
