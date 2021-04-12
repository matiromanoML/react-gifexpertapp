import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) => {
    setInputValue( e.target.value );
}

const handleSubmit = (e) => {
    e.preventDefault(); // evita el comportamiento de recargar el navegador en un form al presionar submit

    if (inputValue.trim().length > 2) {
        setCategories( cats => [inputValue, ...cats]);
        setInputValue('');
    }
    
}

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    );
}


// <> fragment utilizado para agrupar elementos html

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
