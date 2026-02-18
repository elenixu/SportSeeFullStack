import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#E60000',
          color: '#FFFFFF',
          padding: '8px',
          fontSize: '12px',
        }}
      >
        <div>{payload[0].value}kg</div>
        <div>{payload[1].value}kCal</div>
      </div>
    );
  }

  return null;
};

const DailyActivity = ({ sessions = [] }) => {
  // 🛑 Guard: no data yet → render nothing
  if (!sessions.length) {
    return null;
  }

  // 🔹 Format days (1 → 7 instead of dates)
  const data = sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  // 🔹 Compute Y-axis domain & explicit ticks
  const weights = sessions.map((s) => s.kilogram);
  const minWeight = Math.min(...weights);
  const maxWeight = Math.max(...weights);

  // Example result: [68, 70, 71]
  const yAxisTicks = [minWeight - 1, minWeight, maxWeight + 1];

  return (
    <div
      style={{
        backgroundColor: '#FBFBFB',
        padding: '24px',
        borderRadius: '5px',
        width: '835px',
        height: '320px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '24px',
        }}
      >
        <h3
          style={{
            fontSize: '15px',
            color: '#20253A',
            fontStyle: 'Roboto',
            fontWeight: 'medium',
          }}
        >
          Activité quotidienne
        </h3>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            fontSize: '14px',
            fontStyle: 'Roboto',
            fontWeight: 'medium',
          }}
        >
          <span>
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#282D30',
                marginRight: 8,
              }}
            />
            Poids (kg)
          </span>

          <span>
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#E60000',
                marginRight: 8,
              }}
            />
            Calories brûlées (kCal)
          </span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal />

          <XAxis dataKey="day" tickLine={false} axisLine={false} />

          {/* Weight axis (explicit ticks) */}
          <YAxis
            yAxisId="kg"
            orientation="right"
            domain={[minWeight - 1, maxWeight + 1]}
            ticks={yAxisTicks}
            tickLine={false}
            axisLine={false}
          />

          {/* Calories axis (hidden) */}
          <YAxis yAxisId="cal" hide />

          <Tooltip content={<CustomTooltip />} />

          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            barSize={7}
          />

          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivity;
