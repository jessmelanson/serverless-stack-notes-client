import React, { useCallback, useState } from 'react';
import { Auth } from 'aws-amplify';

const AuthContext = React.createContext();
const useAuthContext = () => React.useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const logIn = async (email, password) => {
    try {
      setIsLoading(true);

      await Auth.signIn(email, password);
      setIsAuthenticated(true);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      throw e;
    }
  };

  const logOut = async () => {
    try {
      setIsLoading(true);

      await Auth.signOut();
      setIsAuthenticated(false);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      throw e;
    }
  };

  const getCurrentSession = useCallback(
    async () => {
      try {
        setIsLoading(true);

        await Auth.currentSession();
        setIsAuthenticated(true);

        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        throw e;
      }
    },
    []
  );

  const defaultContext = {
    getCurrentSession,
    isAuthenticated,
    isLoading,
    logIn,
    logOut
  };

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
