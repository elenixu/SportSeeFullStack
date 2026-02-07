import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts'

const data = [{ name: 'Score', value: 12, fill: '#FF0000' }] // 12%

export default function ScoreRadialChart() {
  return (
    <div
      style={{
        background: '#FBFBFB',
        borderRadius: '10px',
        padding: '1rem',
        width: '100%',
        height: 260,
        position: 'relative'
      }}
    >
      <h4 style={{ color: '#20253A', fontSize: 14, marginBottom: 10 }}>Score</h4>
      <ResponsiveContainer width="100%" height="80%">
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
          <RadialBar
            background
            clockWise
            dataKey="value"
            cornerRadius={50}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* Center Text */}
      <div
        style={{
          position: 'absolute',
          top: '55%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}
      >
        <p style={{ fontSize: 20, fontWeight: 'bold', margin: 0 }}>12%</p>
        <p style={{ color: '#74798C', fontSize: 14, margin: 0 }}>de votre</p>
        <p style={{ color: '#74798C', fontSize: 14, margin: 0 }}>objectif</p>
      </div>
    </div>
  )
}
