import React from 'react';

import { ButtonBack, ButtonFront } from './index';

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <a target="_blank" href={props.href}>
      <ButtonFront
        alt={props.alt}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </ButtonFront>
    </a>
  </ButtonBack>
);

export default Button;
