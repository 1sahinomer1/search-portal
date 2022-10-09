import { IRecord } from "hooks/types";

const orderData = (data: IRecord[], order: any) => {
  if (order === "name-ascending") {
    return (
      data &&
      data.sort((a: any, b: any) => {
        return a.nameSurname.localeCompare(b.nameSurname);
      })
    );
  } else if (order === "name-descending") {
    return (
      data &&
      data.sort((a: any, b: any) => {
        return b.nameSurname.localeCompare(a.nameSurname);
      })
    );
  } else if (order === "year-ascending") {
    return (
      data &&
      data.sort((a: any, b: any) => {
        return a.date.localeCompare(b.date);
      })
    );
  } else if (order === "year-descending") {
    return (
      data &&
      data.sort((a: any, b: any) => {
        return b.date.localeCompare(a.date);
      })
    );
  } else {
    return null;
  }
};
export default orderData;
