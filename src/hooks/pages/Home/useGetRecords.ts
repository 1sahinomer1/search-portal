import { useQuery } from "@tanstack/react-query";
import { getRecordsData } from "api/records";
import { IRecord } from "hooks/types";

const useGetRecords = () => {
  return useQuery<IRecord[]>([`records`], () => getRecordsData(), {
    keepPreviousData: true,
  });
};

export default useGetRecords;
