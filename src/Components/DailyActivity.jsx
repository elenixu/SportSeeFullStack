import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid
} from 'recharts'

const data = [
  { day: '1', poids: 70, calories: 240 },
  { day: '2', poids: 69.5, calories: 260 },
  { day: '3', poids: 69.8, calories: 310 },
  { day: '4', poids: 69.2, calories: 220 },
  { day: '5', poids: 69.4, calories: 210 },
  { day: '6', poids: 69.1, calories: 200 },
  { day: '7', poids: 69.3, calories: 240 },
  { day: '8', poids: 70, calories: 290 },
  { day: '9', poids: 69.5, calories: 250 },
  { day: '10', poids: 69.7, calories: 270 }
]

export default function DailyActivityChart() {
  return (
    <ResponsiveContainer width="100%" height={310}>
      <ComposedChart data={data} barGap={8}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickLine={false} />
        <YAxis
        tickCount={3}
          yAxisId="right"
          dataKey="poids"
          orientation="right"
          domain={[69, 71]}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[200, 350]}
          hide={true}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div
                  style={{
                    backgroundColor: '#e60000',
                    color: 'white',
                    padding: '6px',
                    borderRadius: '4px'
                  }}
                >
                  <div>{payload[0].value}kg</div>
                  <div>{payload[1].value}Kcal</div>
                </div>
              )
            }
            return null
          }}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          payload={[
            { value: 'Poids (kg)', type: 'circle', color: '#282D30' },
            { value: 'Calories brûlées (kCal)', type: 'circle', color: '#E60000' }
          ]}
        />
        <Bar
          yAxisId="left"
          dataKey="poids"
          fill="#282D30"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          yAxisId="right"
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
