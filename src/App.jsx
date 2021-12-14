import React from 'react';
import CharactersQuery from './component/CharactersQuery';
import Title  from './component/Title';




function App() {



  return (
    <div className="text-center">
     <h1> Rick And Morty: total <Title /> </h1>
     <CharactersQuery /> 
    </div>
  );
}

export default App;
