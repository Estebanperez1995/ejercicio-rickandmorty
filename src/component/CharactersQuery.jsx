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
                        <ul className='container'>
                        <img src={character.image} alt="img" /> 
                        <p>{character.name}</p>
                        <p>specie: {character.species}</p>
                        <button type="button" class="btn btn-primary">Add</button>
                        </ul>
                        
                    </div>
                    
                
                );
            })}

        </div>
            
            <nav  aria-label="Page navigation example">
                <ul class="pagination pag">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#"
                    onClick={() => setPagina(1) }
                    >1</a></li>
                    <li class="page-item"><a class="page-link" href="#"
                    onClick={() => setPagina(2) }
                    >2</a></li>
                    <li class="page-item"><a class="page-link" href="#"
                    onClick={() => setPagina(3) }
                    >3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
    </div>
);
};

export default CharactersQuery;