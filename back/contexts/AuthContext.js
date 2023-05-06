import { createContext, useState, useEffect, useContext } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const auth = async (coockie) =>{
    const decodedToken = jwt_decode(coockie);
    const userup = await axios.post('/api/user', {id: decodedToken.id})
    setUser(userup.data);
  }
  const updateUser = (updateuser) =>{
    setUser(updateuser)
  }

  return (
    <AuthContext.Provider value={{ user,updateUser, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

