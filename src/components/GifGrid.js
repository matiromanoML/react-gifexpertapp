import React from 'react'
import { userFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data: images, loading} = userFetchGifs( category );


    return (
        <>
            <h3> {category} </h3>

            {loading && <p className="card animate__animated animate__flash">loading</p>}

            <div className="card-grid">
                {images.map( img => ( // al colocar parentesis, hacemos un return implicito
                    <GifGridItem 
                        key={img.id} 
                        {...img}
                    />
                ))}
            </div>
        </>
        
    )
}
