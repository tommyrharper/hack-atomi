/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import './App.css';
import { request, gql } from 'graphql-request'
import useQuery from './atomiQL/atomiQL';
// import {useQuery} from './atomiQL/atomiQLBroken';
// import useFetch from './atomiQL/test';

const query = gql`
  query {
    pokemons(first: 3) {
      id
      name
    }
  }
`
const url = 'https://graphql-pokemon2.vercel.app';

const App: React.FC = () => {
  const [response, loading, hasError] = useQuery(url, query);

  console.log(`response`, response);
  console.log(`loading`, loading);
  console.log(`hasError`, hasError);

  if (loading) return <div>Loading</div>
  if (hasError) return <div>Error</div>

  if (Array.isArray(response.pokemons)) {
      return (
        <div>
          {
            response.pokemons.map((char: any) => (
              <div key={char.id}>{char.name}</div>
            ))
          }
        </div>
      );
  }

  return <div>Got response</div>
}

export default App;
