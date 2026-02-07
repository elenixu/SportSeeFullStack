import React from 'react';
import { getUserActivity } from '../Services/Api';

export const fetchUserActivity = async (userId) => {
     useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getUserActivity(userId);
            setUserData(data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);