import React, { createContext } from 'react'
import { Children } from 'react/cjs/react.production.min';

const AuthContext = createContext();


const AuthContextProvider = () => {
   return (
    <AuthContext.Provider value={null}>
        {Children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider