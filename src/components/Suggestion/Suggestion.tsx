import { LocationIcon } from "icons";

import { SuggestionProps } from "./types";

import * as S from "./styles";

const Suggestion = ({ record }: SuggestionProps) => {
  return (
    <S.Container>
      <LocationIcon />
      <S.Detail>
        <S.Adress>{record.country}</S.Adress>
        <S.City>{record.city}</S.City>
      </S.Detail>
    </S.Container>
  );
};

export default Suggestion;
