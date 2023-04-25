import styled, { css } from "styled-components";

import { shade } from 'polished';

export const Button = styled.button`
  height: 46px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  width: 10%;
  font-weight: 500;
  transition: background-color 0.2s;
  display:flex;
    justify-content: center;
    align-items: center;
  
  ${props => props.isLimit ? 
    css`
        cursor: not-allowed;
        background: #d3d3d3;
    ` :
    css`
        cursor: pointer;
        background: #0f4c8a;
        &:hover {
            
            background: ${shade(0.2, '#0f4c8a')};
        }
    `
  }

    svg{
        display: none;
    }

    @media screen and (max-width: 600px) {
        
        svg{
            display: block;
        }
        text-indent: -9999px;
    }
`;

export const CurrentDay = styled.h1`
   width: 25vh;
   display: flex;
   align-items: center;
   align-content: center;
   justify-content: center;
`

export const Container = styled.header`
    background-color: #fff;
    display:flex;
    align-items: center;
    justify-content: space-around;
    height: 66px;
`;