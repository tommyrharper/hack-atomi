/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request'

const query = gql`
  query {
    pokemons(first: 3) {
      id
      name
    }
  }
`
const pokeURL = 'https://graphql-pokemon2.vercel.app';

const useFetch = (url: string) => {
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
        // const result = await fetch(url).then((payload) => payload.json());
        const result = await request(pokeURL, query)
        // console.log(`result`, result)
        setFetchData({ ...fetchData, loading: false, response: result });
      } catch {
        setFetchData({ ...fetchData, loading: false, hasError: true });
      }
    })()
  }, [url]);

  return [response, loading, hasError];
};

export default useFetch;
