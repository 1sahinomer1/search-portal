import styled from "styled-components";

import { colors } from "theme";

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 27px 60px 40px 30px;
  img {
    width: 149px;
    height: auto;
  }
`;

export const TopMid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  button {
    margin-left: 24px;
  }
`;

export const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  hr {
    transform: matrix(1, 0, 0, 1, 0, 0);
    margin: 14px 0;
  }
`;
export const Flex = styled.div`
  display: flex;
`;

export const RecordContaner = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 6px;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  margin-left: 16px;
  height: 530px;
`;

export const OrderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 8px;
  width: 126.28px;
  height: 29.5px;
  background: #f3f2f2;
  cursor: pointer;
  border: 1px solid #414141;
  border-radius: 8px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    ${colors.darkGray}
  }
`;

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  padding: 8px;
  border: 1px solid #8f8f8f;
  box-shadow: 4px 6px 12px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 155.78px;
  height: 135.11px;
  margin-top: 16px;
`;

export const OrderItem = styled.button<{ selected?: boolean }>`
  border: none;
  outline: none;
  background: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding: 6px 10px;
  min-width: 140px;
  text-align: left;
  color: ${(p) => (p.selected ? "white" : "black")};
  background-color: ${(p) => (p.selected ? "#b3b3b3" : "white")};
  border-radius: 8px;
  :hover {
    background: #b3b3b3;
    color: white;
  }
`;

export const PaginationContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
