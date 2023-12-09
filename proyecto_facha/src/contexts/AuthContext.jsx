import React, { createContext, useContext, useState } from 'react';

import Peticiones from '../Library/Peticiones';

const AuthContext = createContext();

export function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [access, setAccess]= useState(false);

  const login = async (username, password) => {
    try {
      const response = await Peticiones.login(username, password);
      if (response && response.usuario) {
        setUser(response.usuario);
        setAccess(true);
      } else {
        setAccess(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setAccess(false);
      setUser(null);
    }
  };
  
  
  /*const login = async(username, password)=>{
     const loguear = Peticiones.login(username, password)
     (loguear.usuario)?setUser(loguear.usuario) : setUser(null)
     (loguear.usuario)?setAccess(true) : setAccess(false)
    
  }*/
  
  const logout = () => {
    setAccess(false)
    setUser(null)
  };

  return (
    <AuthContext.Provider value={{access, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}


/*const login = (username, password)=>{
    if (username === 'admin' && password === 'adminpassword') {
      
      setUser({ username: 'admin', role: 'admin'});
      setAccess(true)
      
    }else if (username === 'operador' && password === 'operadorpassword') {
        // Usuario operador
        setUser({ username: 'operador', role: 'operador'});
        setAccess(true)

      }else if (username === 'superAdmin' && password === 'superAdminpassword') {
        // Usuario operador
        setUser({ username: 'superAdmin', role: 'superAdmin'});
        setAccess(true)
       } else {
        // Autenticación fallida
        setAccess(false)
        setUser(null);
      }
  }*/