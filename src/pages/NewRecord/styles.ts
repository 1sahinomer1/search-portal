import styled from "styled-components";

import { colors } from "theme";

export const Container = styled.div`
  width: 100%;
  padding: 27px 37px;
`;
export const TopHeader = styled.div`
  display: flex;
`;
export const BackShowMore = styled.div`
  display: flex;
  align-items: center;
  margin-left: 17px;
  color: ${colors.darkGray};
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: ${colors.darkGray};
    line-height: 28px;
    margin-left: 12px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 548px;
  margin: 65px 0 0 200px;
  button {
    margin-top: 70px;
  }
`;
