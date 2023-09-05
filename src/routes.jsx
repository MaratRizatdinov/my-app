import React from 'react';
import { Routes, Route } from "react-router-dom";
import {LoginPage} from "./pages/login/login";
import {RegistrationPage} from "./pages/registration/registration";
import {CategoriesPage} from "./pages/categories/categories";
import {FavoritesPage} from "./pages/favorites/favorites";
import {MainPage} from "./pages/mainpage/mainpage";
import {NotFoundPage} from './pages/notfound/notfound'
import {ProtectedRoute} from './components/protectedroute/protectedroute'



export const AppRoutes = ({...props}) => {
  
  
  
  
    return (
      <Routes>
        <Route path="/login" element={<LoginPage props={props} />} />
        <Route path="/registration" element={<RegistrationPage props={props} />} />        
        <Route element={<ProtectedRoute isAllowed={props.token} />}>
            <Route path="/categories/:id" element={<CategoriesPage />} />        
            <Route path="/favorites" element={<FavoritesPage />} />        
            <Route path="/" element={<MainPage/>} />    
        </Route>        
        <Route path="*" element={<NotFoundPage />} />    
      </Routes>
    );
  }

 