import axios from "axios";

export const get = async ({ path }: { path: string }) => {
  return axios
    .get(path)
    .then((res) => res)
    .catch((error) => error.response);
};
export const post = async () => {};
export const put = async () => {};
export const deleteRequest = async () => {};
