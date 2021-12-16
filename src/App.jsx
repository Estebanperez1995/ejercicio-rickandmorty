import React from 'react';
import CharactersQuery from './component/CharactersQuery';
import Title  from './component/Title';




function App() {



  return (
    <div className="text-center">
     <h1 className='shadow-lg p-3 mb-5 bg-body rounded'> Rick And Morty Total: <Title /> </h1>
     <CharactersQuery /> 
    </div>
  );
}

export default App;
