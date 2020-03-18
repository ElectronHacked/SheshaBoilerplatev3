import { useState } from 'react';
import { makePostRequest } from 'api/utils';
import qs from 'qs';
import { BASE_URL } from 'api/utils/constants';

interface IMutate {
  path: string;
  verb?: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

export const useMutateHttp = ({ path, verb = 'POST' }: IMutate) => {
  const [loading, setIsLoading] = useState(false);

  const mutateFunc = verb && makePostRequest;

  const mutate = (payload: any, params: { [key: string]: string | number } = null) =>
    new Promise((resolve, reject) => {
      setIsLoading(true);
      const parameters = params ? `?${qs.stringify(params)}` : '';

      mutateFunc(`${BASE_URL}${path}${parameters}`, payload)
        .then(value => {
          setIsLoading(false);
          resolve(value);
        })
        .catch(e => {
          setIsLoading(false);
          reject(e);
        });
    });

  return { loading, mutate };
};
