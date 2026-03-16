const BASE_URL = import.meta.env.VITE_API_URL;
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true';

export const getUserMainData = async (userId) => {
  if (USE_MOCK) {
    const res = await fetch('/mockData.json');
    const data = await res.json();
    return {
      data: data.USER_MAIN_DATA.find((user) => user.id === userId),
    };
  }

  const res = await fetch(`${BASE_URL}/${userId}`);
  if (!res.ok) throw new Error('Failed to fetch user main data');
  return await res.json();
};

export const getUserActivity = async (userId) => {
  if (USE_MOCK) {
    const res = await fetch('/mockData.json');
    const data = await res.json();
    return {
      data: data.USER_ACTIVITY.find((user) => user.userId === userId),
    };
  }

  const res = await fetch(`${BASE_URL}/${userId}/activity`);
  if (!res.ok) throw new Error('Failed to fetch user activity');
  return await res.json();
};

export const getUserAverageSessions = async (userId) => {
  if (USE_MOCK) {
    const res = await fetch('/mockData.json');
    const data = await res.json();
    return {
      data: data.USER_AVERAGE_SESSIONS.find((user) => user.userId === userId),
    };
  }

  const res = await fetch(`${BASE_URL}/${userId}/average-sessions`);
  if (!res.ok) throw new Error('Failed to fetch user average sessions');
  return await res.json();
};

export const getUserPerformance = async (userId) => {
  if (USE_MOCK) {
    const res = await fetch('/mockData.json');
    const data = await res.json();
    return {
      data: data.USER_PERFORMANCE.find((user) => user.userId === userId),
    };
  }

  const res = await fetch(`${BASE_URL}/${userId}/performance`);
  if (!res.ok) throw new Error('Failed to fetch user performance');
  return await res.json();
};
