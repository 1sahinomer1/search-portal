import styled from "styled-components";
import { colors } from "theme";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 13px 0;
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 15px;
`;
export const Adress = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.darkest};
`;
export const City = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.lighter};
  margin-top: 4px;
`;
