import React from 'react';
import { Routes, Route } from "react-router-dom";
import {LoginPage} from "./pages/login";
import {RegistrationPage} from "./pages/registration";
import {CategoriesPage} from "./pages/categories";
import {FavoritesPage} from "./pages/favorites";
import {MainPage} from "./pages/mainpage";
import {NotFound} from "./pages/notfound";


function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />        
        <Route path="/categories" element={<CategoriesPage />} />        
        <Route path="/categories" element={<CategoriesPage />} />        
        <Route path="/favorites" element={<FavoritesPage />} />        
        <Route path="/favorites" element={<MainPage />} />    
        <Route path="*" element={<NotFound />} />    
      </Routes>
    );
  }

 export default AppRoutes; 