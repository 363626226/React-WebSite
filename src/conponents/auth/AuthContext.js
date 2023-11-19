import React, { useEffect, useState } from "react";

const defaultContextValue ={
  isAuthenticated:false,
};

const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({children}) => {
  const [isAuthenticated,setIsAuthenticated] = useState(defaultContextValue.isAuthenticated);
  useEffect(() => {
    try {
      const authState = JSON.parse(localStorage.getItem("comebuy:auth.state"));
      if (authState && authState.token){
        setIsAuthenticated(true);
      }
    } catch (error) {
      //show some message,or pass
    }
  },[]);
  return (
    <AuthContext.Provider value={
      { isAuthenticated,
        login:async(username,password) => {
          if (username !== ""){
            const token = "the_token"
            localStorage.setItem("comebuy:auth.state",JSON.stringify({token}));
            setIsAuthenticated(true)
            return { token };
          }
          setIsAuthenticated(false)
          return { token:null,error:"invalid password" };
        },
        logout:async () => {
          setIsAuthenticated(false);
          localStorage.removeItem("comebuy:auth.state")
        }      
      }
      }>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;


