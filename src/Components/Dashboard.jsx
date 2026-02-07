import { useEffect, useState } from 'react';
import { getUserMainData } from '../Services/Api';
import { Card } from '@mui/material';
import caloriesIcon from '../assets/calories-icon.png';
import DiagramCard from './DiagramCard';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserMainData(18);
        setUserData(data);
        console.log(data);
        console.log(setUserData(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 style={{ fontFamily: 'Roboto', fontSize: '48px', color: '#000000' }}>
        Bonjour, {userData.data.userInfos.firstName}
      </h1>

      <div>{userData.data.userInfos.lastName}</div>
      <div>{userData.data.userInfos.age}</div>
      <div>{userData.data.todayScore}</div>
      <div>{userData.data.keyData.calorieCount}</div>
      <div>{userData.data.keyData.proteinCount}</div>
      <div>{userData.data.keyData.carbohydrateCount}</div>
      <div>{userData.data.keyData.lipidCount}</div>

      <Card
        elevation={0}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '200px',
          height: 'auto',
          alignItems: 'center',
          gap: '16px',
          padding: '20px',
          backgroundColor: '#FBFBFB',
        }}
      >
        <img
          src={caloriesIcon}
          alt="Calories Icon"
          style={{ width: '60px', height: '60px' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              fontFamily: 'Roboto',
              fontSize: '20px',
              color: '#282D30',
              fontWeight: 'bold',
            }}
          >
            {userData.data.keyData.calorieCount}cKal
          </div>
          <div
            style={{ fontFamily: 'Roboto', fontSize: '14px', color: '#74798C' }}
          >
            Calories
          </div>
        </div>
      </Card>
      <DiagramCard />
    </div>
  );
};

export default Dashboard;
