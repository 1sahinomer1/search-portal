import styled from "styled-components";
import { colors } from "theme";

export const Input = styled.input<{ error?: string }>`
  padding: 10px 17px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  border-radius: 12px;
  border: 1.5px solid ${(p) => (p.error ? colors.error : colors.darkGray)};
  ::placeholder {
    color: ${(p) => (p.error ? colors.error : colors.inputPlaceholder)};
  }
`;
export const Label = styled.label<{ error?: string }>`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${(p) => (p.error ? colors.error : colors.inputLabelColor)};
  margin-bottom: 7px;
`;
export const Container = styled.div<{ margin?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin};
`;
export const Error = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.error};
  margin-top: 17px;
`;
