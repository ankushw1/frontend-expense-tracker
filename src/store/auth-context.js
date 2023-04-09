import React, { useState } from "react";

const AuthContext = React.createContext({
    token:'',
    isLogin:false,
    login:(token) => {},
    logout:() => {}
})

export const AuthContextProvider = (props) => {

    function loginHandler(token) {
        setToken(token);
    }

    const [token,setToken] = useState(null)

    const userIsLoggedIn = !!token;

    const logoutHandler = () => {
        setToken(null)
    }

    const contextValue = {
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext
