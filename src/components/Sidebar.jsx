import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/dashboard/section1">Section 1</Link></li>
        <li><Link to="/dashboard/section2">Section 2</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
