import React, { useState } from 'react'
import { GlobalStyle } from './App.style'
import { AppRoutes } from './routes'
import { UserContext } from './context'

function App() {
    const [isUser, setIsUser] = useState(
        window.localStorage.getItem('user') || null
    )

    return (
        <div className="App">
            <GlobalStyle />
            <UserContext.Provider value={[isUser, setIsUser]}>
                <AppRoutes isUser={isUser} />
            </UserContext.Provider>
        </div>
    )
}
export default App
