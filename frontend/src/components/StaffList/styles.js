import styled from "styled-components";

import { shade } from 'polished';

export const List = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    list-style: none;
    li {
        background-color: #fff;
        height: 46px;
        width: 50vw;
        border-radius: 10px;
        border: 0;
        display: flex;
        border-radius: 4px;
        justify-content: center;
        align-items: center;
        & + li {
            margin-top: 20px;
        }

        &:hover {
            background: ${shade(0.1, '#fff')};
        }
        span {
          color: #0f4c8a;
          font-size: 24px;
          font-weight: 600;
        }
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        li{
            width: 100%;
        }
    }
`;