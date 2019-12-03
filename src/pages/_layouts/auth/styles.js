import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;

  div {
    background: #fff;
    padding: 50px 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      font-weight: bold;
      color: #000;
      font-size: 14px;
      text-align: left;
      margin-bottom: 5px;
    }

    input {
      background: #fff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #999999;
      margin: 0 0 10px;

      &::placeholder {
        color: #999999;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      background: #ee4d64;
      border: 0;
      border-radius: 4px;
      height: 45px;
      color: #fff;
      font-weight: bold;
      margin: 5px 0 0;
      transition: background 0.2s;
      font-size: 16px;

      &:hover {
        background: ${darken(0.03, '#EE4D64')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
