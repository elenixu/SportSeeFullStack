const BASE_URL = 'http://localhost:3000/user';

export const getUserMainData = async (userId) => {
  const res = await fetch(`${BASE_URL}/${userId}`);
  if (!res.ok) throw new Error('Failed to fetch user main data');
  return await res.json();
};

export const getUserActivity = async (userId) => {
  const res = await fetch(`${BASE_URL}/${userId}/activity`);
  if (!res.ok) throw new Error('Failed to fetch user activity');
  return await res.json();
};

export const getUserAverageSessions = async (userId) => {
  const res = await fetch(`${BASE_URL}/${userId}/average-sessions`);
  if (!res.ok) throw new Error('Failed to fetch user average sessions');
  return await res.json();
};

export const getUserPerformance = async (userId) => {
  const res = await fetch(`${BASE_URL}/${userId}/performance`);
  if (!res.ok) throw new Error('Failed to fetch user performance');
  return await res.json();
};
