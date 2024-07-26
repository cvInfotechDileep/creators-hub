// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routesConfig from './routes';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';


const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.token);

  const renderRoutes = (routes) => {
    return routes.map((route) => {
      const { path, component: Component, auth, children } = route;
      if (auth && !isAuthenticated) {
        return <Route key={path} path={path} element={<Navigate to="/signin" />} />;
      }
      if (children) {
        return (
          <Route key={path} path={path} element={<Component />}>
            {renderRoutes(children)}
          </Route>
        );
      }
      return <Route key={path} path={path} element={<Component />} />;
    });
  };

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {renderRoutes(routesConfig)}
          <Route
            path="*"
            element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/newdemo" />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
