import { SearchInputIcon } from "icons";
import * as S from "./styles";

import { InputProps } from "./types";

const SearchInput = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <S.SearchInputContainer>
      <S.IconContainer>
        <SearchInputIcon />
      </S.IconContainer>
      <S.SearchInput
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        data-testid="searchInput"
      />
    </S.SearchInputContainer>
  );
};

export default SearchInput;
