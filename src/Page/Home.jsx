import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import Typography from '@mui/material/Typography';
import Dashboard from '../Components/Dashboard';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ backgroundColor: '#111' }}>
          <SideBar />
        </div>
        <div>
          <Dashboard style={{ flex: 1 }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
