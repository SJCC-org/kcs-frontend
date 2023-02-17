import { client } from "../axios";

export const getStudyList = async () => {
  try {
    const data = await client.get("v1/study?page=0&size=100");
    return data.data.data;
  } catch (e) {
    console.error(e);
  }
};

export const getStudyCategory = async (category) => {
  try {
    const data = await client.get(
      `v1/study?page=0&size=20&studyCategory=${category}`
    );
    return data.data.data;
  } catch (e) {
    console.error(e);
  }
};

export const postAddStudy = async (
  title,
  description,
  schedule,
  howTo,
  studyCategory,
  maxNum
) => {
  try {
    const data = await client.post("/v1/study", {
      title,
      description,
      schedule,
      howTo,
      studyCategory,
      maxNum,
    });
    return data.data;
  } catch (e) {
    console.error(e);
  }
};
