import styled from "styled-components";
import { colors } from "theme";

export const Container = styled.div`
  padding: 19px 20px 20px 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :hover {
    border-radius: 8px;
    background-color: ${colors.itemContainerHover};
    cursor: pointer;
  }
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
export const City = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.darkest};
  margin-bottom: 4px;
`;
export const Country = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.lighter};
`;
export const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const NameSurname = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.darkGray};
  margin-bottom: 4px;
`;
export const Date = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${colors.darkGray};
`;
