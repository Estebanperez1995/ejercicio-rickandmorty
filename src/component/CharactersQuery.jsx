import React, {useState} from 'react';
import {gql, useQuery } from "@apollo/client";

const CharactersQuery = () => {
    
    

    const [pagina, setPagina] = useState(1)




    const {loading, error, data } = useQuery(gql`
        {
                characters(page: ${pagina}){
                info{
                    count
                }
                results{
                    id
                    name 
                    image 
                    species
                }
            }
        }
    `);
if(loading) return <p>Loading...</p>;
if(error) return <p>Error :(</p>;

return(
    
    <div className="container">
        <div className="row">
            {data.characters.results.map((character) => {
                return (
                    
                    
                    <div key={character.id} style={{background: 'white'}} className="col-sm-6 col-lg-4">
                        <div className='card width-10rem '>
                        <img className='center' src={character.image} alt="img" /> 
                        <h5 className='card-title'>{character.name}</h5>
                        <p><strong>specie:</strong> {character.species}</p>
                        <button type="button" class="btn btn-primary">Add</button>
                        </div>
                        
                    </div>
                    
                
                );
            })}

        </div>
            
            <nav  aria-label="Page navigation example">
                <div class="container float-center">
                    
                    <button class="btn btn-primary btn-sm" 
                    onClick={() => setPagina(pagina - 1) }> Previus
                    </button>
                    <button class="btn btn-primary btn-sm" 
                    onClick={() => setPagina(pagina + 1) }
                    >Next</button>
                    
                </div>
            </nav>
    </div>
);
};

export default CharactersQuery;