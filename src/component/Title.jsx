import React from 'react'
import {gql, useQuery } from "@apollo/client";

const Title = () => {

    
    const {loading, error, data } = useQuery(gql`
        {
                characters{
                info{
                    count
                }
               
            }
        }
    `);
if(loading) return <p>Loading...</p>;
if(error) return <p>Error :(</p>;
    return (
        <div>{data.characters.info.count}</div>
    )
}

export default Title
