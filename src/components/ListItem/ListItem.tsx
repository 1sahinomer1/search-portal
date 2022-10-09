import { ListItemProps } from "./types";
import * as S from "./styles";
import { LocationIcon } from "icons";
import dayjs from "dayjs";
const ListItem = ({
  item: { nameSurname, city, country, date },
}: ListItemProps) => {
  return (
    <S.Container>
      <S.Left>
        <LocationIcon />
        <S.LeftInfo>
          <S.City>{city}</S.City>
          <S.Country>{country}</S.Country>
        </S.LeftInfo>
      </S.Left>
      <S.RightInfo>
        <S.NameSurname data-testid="list-item">{nameSurname}</S.NameSurname>
        <S.Date>{dayjs(date).format("DD/MM/YYYY")}</S.Date>
      </S.RightInfo>
    </S.Container>
  );
};

export default ListItem;
