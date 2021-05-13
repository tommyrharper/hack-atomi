/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request'
import { atom, useAtom } from 'jotai';

const newAtom = atom(null);

const useQuery = (url: string, query: string) => {
  const [fetchData, setFetchData] = useState({
    loading: true,
    hasError: false,
  });
  const [atomData, setAtom] = useAtom(newAtom)
  const { loading, hasError } = fetchData;

  useEffect(() => {
    (async () => {
      try {
        const result = await request(url, query)
        setAtom(result)
      } catch {
        setFetchData({ ...fetchData, loading: false, hasError: true });
      }
    })()
  }, [url]);

  if (atomData) return [atomData, false, hasError]
  return [atomData, loading, hasError];
};

export default useQuery;
