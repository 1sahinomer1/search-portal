import styled from "styled-components";

import { colors } from "theme";

export const SearchInputContainer = styled.div`
  width: 100%;
  border: 1.5px solid ${colors.darkGray};
  border-radius: 8px;
  display: flex;
  align-items: center;
  :hover {
    background-color: ${colors.hoverInputBackground};
    cursor: pointer;
    input {
      background-color: transparent;
      cursor: pointer;
    }
  }
`;
export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 90%;
  height: 100%;
  padding: 15px;
`;

export const IconContainer = styled.div`
  padding: 15px;
`;
