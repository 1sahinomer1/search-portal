import { IRecord } from "hooks/types";

const searchData = (data: IRecord[], search: string) => {
  // Filter data by search term
  return (
    data &&
    data.filter((item: any) => {
      return Object.keys(item).some((key) => {
        return item[key]
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase());
      });
    })
  );
};
export default searchData;
