import useSWR from "swr";
import { kakaoGetFetcher } from "../axios";

const useGetMember = () => {
  const data = useSWR("v1/members", kakaoGetFetcher, {
    errorRetryCount: 3,
  });

  return {
    memberInfo: data.data,
  };
};

export default useGetMember;
