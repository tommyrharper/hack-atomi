/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request'
import { atom, useAtom } from 'jotai';

const useQuery = (url: string, query: string) => {
  const [fetchData, setFetchData] = useState({
    response: null,
    loading: false,
    hasError: false,
  });

  const { response, loading, hasError } = fetchData;

  useEffect(() => {
    (async () => {
      setFetchData({ ...fetchData, loading: true });
      try {
        const result = await request(url, query)
        setFetchData({ ...fetchData, loading: false, response: result });
      } catch {
        setFetchData({ ...fetchData, loading: false, hasError: true });
      }
    })()
  }, [url]);

  return [response, loading, hasError];
};

export default useQuery;
