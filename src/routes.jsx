import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/login/login'
import { RegistrationPage } from './pages/registration/registration'
import {CategoriesPage} from "./pages/categories/categories";
import {FavoritesPage} from "./pages/favorites/favorites";
import { MainPage } from './pages/mainpage/mainpage'
import { NotFoundPage } from './pages/notfound/notfound'
import { ProtectedRoute } from './components/protectedroute/protectedroute'
import Trackblock from './components/main/centerblock/contentblock/trackblock/trackblock';


export const AppRoutes = ({ isUser }) => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route element={<ProtectedRoute isAllowed={isUser} />}>
              <Route path ="/*" element ={<MainPage />}>
                <Route index element={<Trackblock/>}/>
                <Route path="favorites" element={<FavoritesPage />} />
              </Route>
              <Route path="/categories/:id" element={<CategoriesPage />} />                
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
