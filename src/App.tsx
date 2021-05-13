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

const API_ENDPOINT = 'http://www.mocky.io/v2/5c62e7c33000004a00019b05';

const App: React.FC = () => {
  const [response, loading, hasError] = useQuery(url, query);

  console.log(`response`, response);
  console.log(`loading`, loading);
  console.log(`hasError`, hasError);

  if (loading) return <div>Loading</div>
  if (hasError) return <div>Error</div>

  return <div>Got response</div>

  // if (response !== null && typeof response !== 'boolean') {
  //   if (typeof response === 'object') {
  //     return (
  //       <div>
  //         {
  //           response.pokemons.map(char => (
  //             <div>{char.name}</div>
  //           ))
  //         }
  //       </div>
  //     );
  //   }
  // }

}

export default App;
