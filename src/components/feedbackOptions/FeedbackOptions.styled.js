import styled from "styled-components";

export const Btn = styled.button`
  width: 110px;
  height: 40px;
  margin: 10px;
  border: none;
  color: black;
  background-color: #8e8f99;
  border-radius: 8px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
    background-color: #4d5ae5;
  }

  &:active {
    transition: none;
    color: #ffffff;
    background-color: #404bbf;
  }

  &:focus {
    outline: none;
  }
`;
