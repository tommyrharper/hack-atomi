import React, { useEffect, useState } from 'react'
import { request, gql } from 'graphql-request'

export const useQuery = async (url: string, query: string) => {
  const [fetchData, setFetchData] = useState({
    response: null,
    loading: false,
    error: false,
  })
  const { response, loading, error } = fetchData

  useEffect(() => {
    (async () => {
      setFetchData({ ...fetchData, loading: true })
      try {
        const res = await request(url, query).then(data => data.json());
        setFetchData({ ...fetchData, loading: false, response: res })
      } catch (err) {
        setFetchData({ ...fetchData, loading: false, error: err })
      }
    })()
  }, [url]);

  return [ response, loading, error ];
}
