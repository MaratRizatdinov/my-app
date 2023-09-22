import React, { useState, useContext } from 'react'
import { GlobalStyle } from './App.style'
import { AppRoutes } from './routes'
import { UserContext } from './context'

function App() {
    const [isUser, setIsUser] = useState(
        window.localStorage.getItem('user') || 'Empty'
    )

    return (
        <div className="App">
            <GlobalStyle />
            <UserContext.Provider value={[isUser, setIsUser]}>
                <AppRoutes isUser={isUser} setIsUser={setIsUser} />
            </UserContext.Provider>
        </div>
    )
}
export default App
