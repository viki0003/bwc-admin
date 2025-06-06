
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ParentProfileContext = createContext();

export const ParentProfileProvider = ({ children }) => {
  const [parentProfiles, setParentProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchParentProfiles = async () => {
    try {
      const response = await axios.get('http://54.185.32.148/api/customer/parent-account/');
      setParentProfiles(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error('Error fetching parent profiles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParentProfiles();
  }, []);

  return (
    <ParentProfileContext.Provider value={{ parentProfiles, loading }}>
      {children}
    </ParentProfileContext.Provider>
  );
};