// src/components/common/Button.js

import styled from "styled-components";

const Button = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  display: block;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.greenTint};
  }
`;

export default Button;
