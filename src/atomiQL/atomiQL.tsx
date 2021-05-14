/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import { request } from 'graphql-request'
import { atom, useAtom } from 'jotai';
import { AppContext } from './atomiContext';

const newAtom = atom(null);

const useQuery = (url: string, query: string): [any, boolean, boolean] => {
  const [fetchData, setFetchData] = useState({
    loading: true,
    hasError: false,
  });
  const [atomData, setAtom] = useAtom(newAtom)
  const { url: contextUrl } = useContext(AppContext)
  console.log(`contextUrl`, contextUrl)
  const { loading, hasError } = fetchData;

  useEffect(() => {
    (async () => {
      try {
        const result = await request(contextUrl, query)
        setAtom(result)
      } catch {
        setFetchData({ ...fetchData, loading: false, hasError: true });
      }
    })()
  }, [url]);

  return [atomData, !atomData, hasError]
};

export default useQuery;
