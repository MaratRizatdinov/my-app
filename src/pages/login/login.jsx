import React from 'react';
import { Link } from 'react-router-dom';
import Authpage from '..//..//components/authpages/authpage'


export const LoginPage = ({props}) =>{
    
    
    return (
        <>
            <Authpage isLoginMode={true}></Authpage>
            <div>
                <h1>Страница входа</h1>
                <button className='login_button' onClick={props.func}>
                    {props.token ? 'Log Out': 'Log In'}
                </button>
                <br/>
                <br/>
                <Link to="/">
                    Переход на главную 
                </Link>
                <br/>
                <br/>
                <Link to="/registration">
                    Переход на страницу регистрации 
                </Link>
                
            </div>
        </>
        );
}



