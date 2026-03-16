import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

export default function ScoreRadialChart({ score }) {
  // score is between 0 and 1 → convert to %
  const percentage = Math.round(score * 100);

  const data = [
    {

      value: percentage
    },
  ];

  return (
  <div
    style={{
      background: '#FBFBFB',
      borderRadius: '10px',
      padding: '1rem',
      height: '223px',
      width: '218px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}
  >
    <h4 style={{ color: '#20253A', fontSize: 14, margin: 0, marginBottom: '1rem' }}>
      Score
    </h4>

    <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          barSize={10}
          startAngle={90}
          endAngle={450}
          data={data}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" cornerRadius={50} fill="#FF0000" />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* Center Text */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 20, fontWeight: 'bold', margin: 0 }}>
          {percentage}%
        </p>
        <p style={{ color: '#74798C', fontSize: 14, margin: 0 }}>
          de votre objectif
        </p>
      </div>
    </div>
  </div>
);
}
