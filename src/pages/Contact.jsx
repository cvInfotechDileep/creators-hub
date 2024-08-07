import HeaderNavbar from '../components/HeaderNavbar';
import HeaderInternalPage from '../components/Headers/HeaderInternalPage';
import Admindashboard from '../components/InnerPagesComponents/CreatorComponents';
import "./dashboard.scss"
const Contact = () => {

    return (
      <div style={{background:"#EDF0F2"}}>
        {/* <HeaderNavbar /> */}
        <HeaderInternalPage />
        <Admindashboard />
      </div>
    );
  };
  
  export default Contact;
  