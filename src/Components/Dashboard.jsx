import { useEffect, useState } from 'react';
import { getUserMainData } from '../Services/Api';
import StatsCard from './StatsCard';
import DiagramCard from './DiagramCard';

import caloriesIcon from '../assets/calories-icon.png';
import proteinIcon from '../assets/protein-icon.png';
import carbsIcon from '../assets/carbs-icon.png';
import lipidIcon from '../assets/fat-icon.png';

const statsConfig = [
  {
    key: 'calories',
    label: 'Calories',
    unit: 'kCal',
    icon: caloriesIcon,
    valueKey: 'calorieCount',
  },
  {
    key: 'proteins',
    label: 'Proteins',
    unit: 'g',
    icon: proteinIcon,
    valueKey: 'proteinCount',
  },
  {
    key: 'carbs',
    label: 'Carbohydrates',
    unit: 'g',
    icon: carbsIcon,
    valueKey: 'carbohydrateCount',
  },
  {
    key: 'lipids',
    label: 'Lipids',
    unit: 'g',
    icon: lipidIcon,
    valueKey: 'lipidCount',
  },
];

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserMainData(12);
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <h1>Loading...</h1>;
  }

  const { userInfos, keyData, todayScore } = userData.data;

  return (
    <div>
      <h1 style={{ fontFamily: 'Roboto', fontSize: '48px', color: '#000000' }}>
        Bonjour, {userInfos.firstName}
      </h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
        {/* <div>{userInfos.lastName}</div>
        <div>{userInfos.age}</div> */}
        {/* <div>{todayScore}</div> */}
        <DiagramCard score={userData.data.todayScore ?? userData.data.score} />

        {/* Stats Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginTop: '24px',
          }}
        >
          {statsConfig.map((stat) => (
            <StatsCard
              key={stat.key}
              icon={stat.icon}
              label={stat.label}
              unit={stat.unit}
              value={keyData[stat.valueKey]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
