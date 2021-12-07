import BaseAxiosInstance from '../axios/BaseAxiosInstance';

export async function hasuraQuery( query = '', variables = {} ) {
  try {
    const response = await BaseAxiosInstance.post('/v1/graphql', {
      query,
      variables,
    });

    if (response?.errors && response?.errors.length) {
      throw new Error(response.errors[0].message);
    }

    return response;
  } catch (err) {
    throw err;
  }
}
