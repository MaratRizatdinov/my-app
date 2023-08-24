import React from 'react';
import { Link } from 'react-router-dom';

export const RegistrationPage = () =>{
    return (
        <div>
            <h1>Страница регистрации</h1>
            <br/>
            <br/>
            <Link to="/login">
                Переход на страницу авторизации 
            </Link>
        </div>
        );
}

