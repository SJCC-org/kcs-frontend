import useSWR from "swr";
import { kakaoGetFetcher } from "../lib/axios";

const useGetUserStudyList = () => {
  const data = useSWR("/v1/members/study", kakaoGetFetcher, {
    errorRetryCount: 3,
  });

  return {
    userStudyList: data.data,
  };
};

export default useGetUserStudyList;
