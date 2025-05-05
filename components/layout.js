// layouts/layout.js
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ marginLeft: '200px', padding: '20px', flex: 1 }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
