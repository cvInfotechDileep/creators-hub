import HeaderInternalPage from "../components/Headers/HeaderInternalPage";
import UserProfile from "../components/InnerPagesComponents/UserComponents/UserProfile";
import "./dashboard.scss"

const About = () => {

  // for User feed
    return (
      <div style={{background:"#e7eff5"}}>
        <HeaderInternalPage />
        <UserProfile />
      </div> 
    );
  };
  
  export default About;
  