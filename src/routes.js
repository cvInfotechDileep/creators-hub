import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignInForm from './components/AuthComponents/SignIn';
import Dashboard from './pages/Dashboard';
import Section1 from './pages/Dashboard/Section1';
import Section2 from './pages/Dashboard/Section2';
import SignUpForm from './components/AuthComponents/SignUp';
import ForgotPassWord from './components/AuthComponents/ForgotPassword';

const routesConfig = [
  {
    path: "/",
    component: Home
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
    component: ForgotPassWord
  },
  {
    path: "/signup",
    component: SignUpForm
  },
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
