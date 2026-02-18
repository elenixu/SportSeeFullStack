import { useEffect, useState } from 'react';
import {
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../Services/Api';
import { Box } from '@mui/material';

import DailyActivity from './DailyActivity';
import Duration from './Duration';
import PerformanceRadarChart from './PerformanceRadarChart';
import ScoreRadialChart from './ScoreRadialChart';

export default function DiagramCard({ score }) {
  const [activityData, setActivityData] = useState(null);
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [activity, averageSessions, performance] = await Promise.all([
          getUserActivity(12),
          getUserAverageSessions(12),
          getUserPerformance(12),
        ]);

        setActivityData(activity);
        setAverageSessionsData(averageSessions);
        setPerformanceData(performance);
      } catch (error) {
        console.error('Failed to fetch diagram data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {activityData && <DailyActivity sessions={activityData.data.sessions} />}

      <Box display="flex" flexDirection="row" gap={3} paddingTop={3}>
        {averageSessionsData && (
          <Duration sessions={averageSessionsData.data.sessions} />
        )}

        {performanceData && (
          <PerformanceRadarChart data={performanceData.data} />
        )}

        {score !== undefined && <ScoreRadialChart score={score} />}
      </Box>
    </Box>
  );
}
