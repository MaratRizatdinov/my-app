import { useParams } from 'react-router-dom';
import React from 'react';

export const CategoriesPage = () =>{
    const params= useParams();
    return (
        <div>
            <h1>Страница категорий {params.id}</h1>
        </div>
        );
}

