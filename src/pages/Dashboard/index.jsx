// import DashboardNav from '../../components/DashboardNav';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../../components/DashboardNav';

const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
