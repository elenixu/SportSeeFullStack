import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer
} from 'recharts'

const data = [
  { subject: 'Intensité', value: 80 },
  { subject: 'Vitesse', value: 100 },
  { subject: 'Force', value: 80 },
  { subject: 'Endurance', value: 70 },
  { subject: 'Energie', value: 60 },
  { subject: 'Cardio', value: 90 }
]

export default function PerformanceRadarChart() {
  return (
    <div
      style={{
        backgroundColor: '#2c2c2c',
        borderRadius: '10px',
        padding: '1rem',
        height: '260px',
        width: '100%',
        color: 'white'
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#fff" strokeOpacity={0.2} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#fff"
            tick={{ fill: '#fff', fontSize: 12 }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
