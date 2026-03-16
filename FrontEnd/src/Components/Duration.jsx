import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const daysMap = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export default function Duration({ sessions = [] }) {
  if (!sessions.length) return null;

  // Format data for the chart
  const data = sessions.map((session) => ({
    day: daysMap[session.day - 1],
    session: session.sessionLength,
  }));

 return (
  <div
    style={{
      background: '#ff0000',
      borderRadius: '10px',
      padding: '1rem',
      color: 'white',
      height: '223px',
      width: '218px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <h4 style={{ fontWeight: '400',fontFamily: 'Roboto', opacity: 0.5, margin: 0, marginBottom: '1rem' }}>
      Durée moyenne des sessions
    </h4>

    <div style={{ flex: 1, minHeight: 0 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="day"
            fontFamily="Roboto"
            axisLine={false}
            tickLine={false}
            stroke="white"
            tick={{ fill: 'white', opacity: 0.6 }}
          />

          <Tooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div
                    style={{
                      background: 'white',
                      fontFamily: 'Roboto',
                      color: '#000',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      fontSize: '12px',
                    }}
                  >
                    {payload[0].value} min
                  </div>
                );
              }
              return null;
            }}
          />

          <Line
            type="monotone"
            dataKey="session"
            stroke="#fff"
            strokeWidth={2}
            dot={{
              stroke: 'white',
              strokeWidth: 4,
              r: 4,
              fill: 'rgba(255,255,255,0.3)',
            }}
            activeDot={{
              r: 6,
              stroke: 'white',
              strokeWidth: 4,
              fill: 'rgba(255,255,255,0.6)',
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
}
