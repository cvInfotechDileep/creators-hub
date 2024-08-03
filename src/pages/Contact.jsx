import HeaderNavbar from '../components/HeaderNavbar';
import HeaderInternalPage from '../components/Headers/HeaderInternalPage';
import Admindashboard from '../components/InnerPagesComponents/CreatorComponents';
import "./dashboard.scss"
const Contact = () => {

    return (
      <div style={{background:"#e7eff5"}}>
        {/* <HeaderNavbar /> */}
        <HeaderInternalPage />
        <Admindashboard />
      </div>
    );
  };
  
  export default Contact;
  