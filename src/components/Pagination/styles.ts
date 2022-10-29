import styled from "styled-components";
import { colors } from "theme";

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;
export const Li = styled.li<{ disabled?: boolean; selected?: boolean }>`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border: 1px solid ${colors.darkGray};
  border-radius: 4px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  color: ${(p) =>
    p.disabled ? "gray" : p.selected ? "white" : colors.darkGray};
  background-color: ${(p) => p.selected && colors.primaryColor};
  :hover {
    cursor: ${(p) => (p.disabled ? " not-allowed" : "pointer")};
  }
  :disabled {
    cursor: not-allowed;
  }
`;
export const Dots = styled.li`
  padding: 12px;
  height: 32px;
  :hover {
    ${Li} {
      background-color: transparent;
      cursor: default;
    }
  }
`;

export const PageCount = styled.span<{ active?: boolean }>`
  color: ${(p) => (p.active ? "white" : colors.darkGray)};
  background-color: ${(p) => (p.active ? colors.primaryColor : "white")};
  width: 24px;
  height: 24px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${colors.darkGray};
  cursor: pointer;
  :hover {
    background-color: ${colors.primaryColor};
    color: white;
  }
`;
export const MultiPageCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`;
