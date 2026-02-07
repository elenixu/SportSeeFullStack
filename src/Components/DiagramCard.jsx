import React from 'react';
import DailyActivity from './DailyActivity';
import Duration from './Duration';
import Stats from './Stats';
import Score from './Score';

export default function DiagramCard() {
  return (
    <div className="diagram-card">
      <h2>Diagram Card</h2>
      <div sx={{ display: 'flex', flexDirection: 'row' }}>
        <DailyActivity />
        <Duration />
        <Stats />
        <Score />
      </div>
    </div>
  );
}
