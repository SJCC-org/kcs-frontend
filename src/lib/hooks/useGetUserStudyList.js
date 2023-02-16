import useSWR from "swr";
import { kakaoGetFetcher } from "../axios";

const useGetUserStudyList = () => {
  const data = useSWR("/v1/members/study", kakaoGetFetcher, {
    errorRetryCount: 3,
  });

  return {
    userStudyList: data.data,
  };
};

export default useGetUserStudyList;
