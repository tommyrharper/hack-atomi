/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './App.css';
import { gql } from 'graphql-request'
import useQuery from './atomiQL/atomiQL';
// import {useQuery} from './atomiQL/atomiQLBroken';
// import useFetch from './atomiQL/test';
import { AppContext } from './atomiQL/atomiContext';

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
  const [data, loading, hasError] = useQuery(url, query);

  console.log(`loading`, loading);
  console.log(`hasError`, hasError);
  console.log(`data`, data);
  
  if (loading) return <div>Loading</div>
  if (hasError) return <div>Error</div>

  return (
    <AppContext.Consumer>
        {(context) => (<div>
          {
            data.pokemons.map((char: any) => (
              <div key={char.id}>{char.name}</div>
            ))
          }
          <div>{context.lang}</div>
        </div>)}
    </AppContext.Consumer>
  );
}

export default App;
