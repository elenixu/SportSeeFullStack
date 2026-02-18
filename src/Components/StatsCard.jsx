import { Card } from '@mui/material';

const StatsCard = ({ icon, value, unit, label }) => {
  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        fontFamily: 'Roboto',
        alignItems: 'center',
        textAlign: 'left',
        gap: 2,
        p: 2.5,
        width: 200,
        backgroundColor: '#FBFBFB',
      }}
    >
      <img src={icon} alt={`${label} icon`} width={60} height={60} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 20, fontWeight: 'bold', color: '#282D30' }}>
          {value}
          {unit}
        </span>
        <span style={{ fontFamily: 'Roboto', fontSize: 14, color: '#74798C' }}>
          {label}
        </span>
      </div>
    </Card>
  );
};

export default StatsCard;
