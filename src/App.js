import React, { useEffect } from 'react';

import './App.css';
import NavLinks from './containers/NavLinks';
import Routes from './Routes';
import Loading from './components/Loading';
import { useAuthContext } from './context/AuthContext';

const App = () => {
  const { getCurrentSession, isLoading } = useAuthContext();

  useEffect(() => {
    const initData = async () => {
      try {
        await getCurrentSession();
      } catch (e) {
        if (e !== 'No current user') alert(e.message);
      }
    };

    initData();
  }, [getCurrentSession]);

  if (isLoading) return <Loading />;

  return (
    <div className="App container">
      <NavLinks />
      <Routes />
    </div>
  );
};

export default App;
