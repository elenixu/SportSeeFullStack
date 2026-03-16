import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import Dashboard from '../Components/Dashboard';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Header />

      <div style={{ display: 'flex', flex: 1 }}>
        <SideBar />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            padding: '30px',
          }}
        >
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Home;
