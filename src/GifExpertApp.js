import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['SuperCampeones'])

    // const handleAdd = () => {
    //     //setCategories( [...categories, 'Arnold'] );
    //     setCategories( cats => [...cats, 'Arnold']);
    // }

    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />

        <ol> 
            
          {categories.map((category) => (
            <GifGrid
                key={category} 
                category={category} 
            />
          ))}
        </ol>
      </>
    );
    // un map siempre recibe dos argumentos por defecto, el elemento del arreglo y el indice
}
