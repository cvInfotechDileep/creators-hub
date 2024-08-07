// src/routes.js
import React from 'react';
const Home = React.lazy(() => import('./pages/Home'));
const UserProfile = React.lazy(() => import('./pages/UserProfile'));
const StreamTwitch = React.lazy(() => import('./pages/StreamTwitch'));
const StreamYoutube = React.lazy(() => import('./pages/StreamYoutube'));
const Balance = React.lazy(() => import('./pages/Balance'));
const CreatorProfile = React.lazy(() => import('./pages/CreatorProfile'));
const CreatotsList = React.lazy(() => import('./pages/CreatorsList'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const SignInForm = React.lazy(() => import('./components/AuthComponents/SignIn'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
// const Section1 = React.lazy(() => import('./pages/Dashboard/Section1'));
// const Section2 = React.lazy(() => import('./pages/Dashboard'));
const SignUpForm = React.lazy(() => import('./components/AuthComponents/SignUp'));
const ForgotPassword = React.lazy(() => import('./components/AuthComponents/ForgotPassword'));
// const GoogleCallback = React.lazy(() => import('./components/AuthComponents/GoogleCallback'));
const Creator = React.lazy(() => import('./pages/Dashboard/Creator'));
const User = React.lazy(() => import('./pages/Dashboard/User'));
const Creatorsfeed = React.lazy(() => import('./pages/CreatorsFeed'));
// const Section1 = React.lazy(() => import('./pages/Dashboard/Creator/Section1'));
// const Section2 = React.lazy(() => import('./pages/Dashboard/Creator/Section2'));
// const UserSection1 = React.lazy(() => import('./pages/Dashboard/User/Section1'));
// const UserSection2 = React.lazy(() => import('./pages/Dashboard/User/Section2'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


const routesConfig = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/signin",
    component: SignInForm,
  },
  {
    path: "/signup",
    component: SignUpForm,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/user-profile",
    component: UserProfile,
  },
  {
    path: "/creator-profile",
    component: CreatorProfile,
  },
  {
    path: "/stream-twitch",
    component: StreamTwitch,
  },
  {
    path: "/stream-youtube",
    component: StreamYoutube,
  },
  {
    path: "/stream-youtube",
    component: StreamYoutube,
  },
  {
    path: "/balance",
    component: Balance,
  },
  {
    path: "/creators-timeline",
    component: Creatorsfeed,
  },
  {
    path: "/creator/:username",
    component: Creator,
    auth: true,
    // children: [
    //   {
    //     path: "section1",
    //     component: Section1,
    //   },
    //   {
    //     path: "section2",
    //     component: Section2,
    //   },
    // ],
  },
  {
    path: "/user/:username",
    component: User,
    auth: true,
    // children: [
    //   {
    //     path: "section1",
    //     component: UserSection1,
    //   },
    //   {
    //     path: "section2",
    //     component: UserSection2,
    //   },
    // ],
  },
];

export default routesConfig;

// const routesConfig = [
//   {
//     path: "/",
//     component: Home,
//   },
//   {
//     path: "/about",
//     component: About
//   },
//   {
//     path: "/contact",
//     component: Contact
//   },
//   {
//     path: "/signin",
//     component: SignInForm
//   },
//   {
//     path: "/forgot-password",
//     component: ForgotPassword
//   },
//   {
//     path: "/signup",
//     component: SignUpForm
//   },
//   // {
//   //   path: "/google-login",
//   //   component: GoogleCallback,
//   // },
//   {
//     path: "/dashboard",
//     component: Dashboard,
//     auth: true,
//     children: [
//       {
//         path: "section1",
//         component: Section1
//       },
//       {
//         path: "section2",
//         component: Section2
//       }
//     ]
//   }
// ];

// export default routesConfig;
