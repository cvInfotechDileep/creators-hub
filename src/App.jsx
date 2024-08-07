// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routesConfig from './routes';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';


const App = () => {
  // const isAuthenticated = useSelector((state) => state.auth.token);
  // const {token, role} = useSelector((state) => state.auth.token);
  const { token, user_type, username } = useSelector((state) => state.auth);
  // const { token, user_type } = useSelector((state) => state.auth);

  console.log({ "token": token, user_type, username })
  localStorage.setItem('token', token);

  const renderRoutes = (routes) => {
    return routes.map((route) => {
      const { path, component: Component, auth, children } = route;
      // if (auth && !isAuthenticated) {
      //   return <Route key={path} path={path} element={<Navigate to="/signin" />} />;
      // }
      if (auth && !token) {
        // If the route requires authentication and no token is found, redirect to login
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
              token
                ? user_type === 'creator'
                  ? <Navigate to={`/creator/${username}`} />
                  : user_type === 'fan'
                    ? <Navigate to={`/fan/${username}`} />
                    : <Navigate to="/dashboard" />
                : <Navigate to="/" />
            }
          // element={
          //   token
          //     ? user_type === 'creator'
          //       ? <Navigate to="/creator" />
          //       : <Navigate to="/user" />
          //     : <Navigate to="/" />
          // }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
    // <Router>
    //   <Suspense fallback={<Loading />}>
    //     <Routes>
    //       {renderRoutes(routesConfig)}
    //       <Route
    //         path="*"
    //         element={
    //           token ? <Navigate to="/dashboard" /> : <Navigate to="/" />
    //         }
    //       />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </Suspense>
    // </Router>
  );
};

export default App;


// // src/App.js
// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import routesConfig from './routes';
// import NotFound from './pages/NotFound';
// import Loading from './components/Loading';
// import GoogleCallback from './components/AuthComponents/GoogleCallback';


// const App = () => {
//   const isAuthenticated = useSelector((state) => state.auth.token);

//   const renderRoutes = (routes) => {
//     return routes.map((route) => {
//       const { path, component: Component, auth, children } = route;
//       if (auth && !isAuthenticated) {
//         return (
//           <>
//             <Route key={path} path={path} element={<Navigate to="/signin" />} />
//             <Route path="/auth/google" key={"nothing"} element={<GoogleCallback />}></Route>/
//           </>
//         )
//       }
//       if (children) {
//         return (
//           <Route key={path} path={path} element={<Component />}>
//             {renderRoutes(children)}
//           </Route>
//         );
//       }
//       return <Route key={path} path={path} element={<Component />} />;
//     });
//   };

//   return (
//     <Router>
//       <Suspense fallback={<Loading />}>
//         <Routes>
//           {renderRoutes(routesConfig)}
//           <Route
//             path="*"
//             element={
//               isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/" />
//             }
//           />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;
