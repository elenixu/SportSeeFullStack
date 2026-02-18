import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

const kindLabels = {
  cardio: 'Cardio',
  energy: 'Énergie',
  endurance: 'Endurance',
  strength: 'Force',
  speed: 'Vitesse',
  intensity: 'Intensité',
};

export default function PerformanceRadarChart({ data }) {
  if (!data) return null;

  const { kind, data: performanceValues } = data;

  // Format data for Recharts
  const formattedData = performanceValues
    .map((item) => ({
      subject: kindLabels[kind[item.kind]],
      value: item.value,
    }))
    // Figma order (clockwise)
    .reverse();

  return (
    <div
      style={{
        backgroundColor: '#2c2c2c',
        borderRadius: '10px',
        padding: '1rem',
        height: '263px',
        width: '258px',
        color: 'white',
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={formattedData}>
          <PolarGrid stroke="#fff" strokeOpacity={0.2} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#fff"
            tick={{ fill: '#fff', fontSize: 12 }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
