import styled from "styled-components";

import { colors } from "theme";

export const Button = styled.button<{ margin?: string }>`
  background-color: ${colors.primaryColor};
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  padding: 13px 40px;
  margin: ${({ margin }) => margin};
  color: white;
  &:hover {
    background-color: ${colors.pressedPrimary};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
