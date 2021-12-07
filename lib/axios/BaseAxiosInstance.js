import axios from 'axios';

const BaseAxiosInstance = axios.create(
  {
    baseURL: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT,
  },
);

BaseAxiosInstance.interceptors.response.use(
  ({ data }) => data,
  ({ response: { data } }) => {
    return Promise.reject(data);
  },
);

export default BaseAxiosInstance;
