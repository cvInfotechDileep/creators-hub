// src/routes.js
import React from 'react';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const SignInForm = React.lazy(() => import('./components/AuthComponents/SignIn'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Section1 = React.lazy(() => import('./pages/Dashboard/Section1'));
const Section2 = React.lazy(() => import('./pages/Dashboard'));
const SignUpForm = React.lazy(() => import('./components/AuthComponents/SignUp'));
const ForgotPassword = React.lazy(() => import('./components/AuthComponents/ForgotPassword'));
// const GoogleCallback = React.lazy(() => import('./components/AuthComponents/GoogleCallback'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const routesConfig = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/signin",
    component: SignInForm
  },
  {
    path: "/forgot-password",
    component: ForgotPassword
  },
  {
    path: "/signup",
    component: SignUpForm
  },
  // {
  //   path: "/google-login",
  //   component: GoogleCallback,
  // },
  {
    path: "/dashboard",
    component: Dashboard,
    auth: true,
    children: [
      {
        path: "section1",
        component: Section1
      },
      {
        path: "section2",
        component: Section2
      }
    ]
  }
];

export default routesConfig;
