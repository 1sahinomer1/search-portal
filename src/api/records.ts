import axios from "axios";

const BASEURL = "https://backend-server-tesodev.herokuapp.com/data";

export const getRecordsData = async () => {
  const { data } = await axios.get<Api.Records.RecordsData[]>(BASEURL);
  return data;
};
