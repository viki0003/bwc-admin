import React, { createContext,
  useContext,
  useEffect,
  useState,
  useCallback,useRef } from "react";
import axiosInstance from "../Config/axios";

import { Toast } from "primereact/toast";

const SchedulerContext = createContext();
export const useScheduler = () => useContext(SchedulerContext);
export const SchedulerProvider = ({ children }) => {
  const [eventFieldsData, seteventFieldsData] = useState({});
  const [activityEquipmentFieldsData, setactivityEquipmentFieldsData] = useState({});
  const toastRef = useRef(null);

  const cleareventFieldsData = () => seteventFieldsData({});

  const fetchEventFieldsData = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      toastRef.current?.show({
        severity: "error",
        summary: "Unauthorized",
        detail: "Access token missing. Please log in again.",
        life: 4000,
      });
      cleareventFieldsData();
      localStorage.clear();
      window.location.href = "/login";
      return;
    }

    try {
      const response = await axiosInstance.get("/scheduler/schedule_data/", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      
      seteventFieldsData(response.data);
    } catch (err) {
      const errorDetail = err.response?.data?.detail || "Failed to fetch players";
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: errorDetail,
        life: 3000,
      });
    }
  };

  const fetchActivityEquipmentsFieldsData = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      toastRef.current?.show({
        severity: "error",
        summary: "Unauthorized",
        detail: "Access token missing. Please log in again.",
        life: 4000,
      });
      cleareventFieldsData();
      localStorage.clear();
      window.location.href = "/login";
      return;
    }

    try {
      const response = await axiosInstance.get("/scheduler/schedule_activity_data/", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setactivityEquipmentFieldsData(response.data);
    } catch (err) {
      const errorDetail = err.response?.data?.detail || "Failed to fetch players";
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: errorDetail,
        life: 3000,
      });
    }
  };


  const addNewActivityData = async (data) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await axiosInstance.post("/scheduler/create_activity/",  data, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      await fetchActivityEquipmentsFieldsData();
    } catch (err) {
      const errorDetail = err.response?.data?.detail || "Failed to fetch players";
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: errorDetail,
        life: 3000,
      });
    }

  }


  const createNewEvent = async (data) => {

    
    console.log("createNewEvent before api call",data);

    
  

    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await axiosInstance.post("/scheduler/schedule/",  data, {
        headers: { 
          Authorization: `Bearer ${accessToken}` ,
          "Content-Type": "multipart/form-data"
        },
      });

      console.log("createNewEvent after api call response", response.data);
      
      await fetchEventFieldsData();
      await fetchActivityEquipmentsFieldsData();
    } catch (err) {
      const errorDetail = err.response?.data?.detail || "Failed to fetch players";
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: errorDetail,
        life: 3000,
      });
    }

  }




  // useEffect(() => {

  //   fetchEventFieldsData();

  // }, []);

  
  

  return (
    <SchedulerContext.Provider value={{ eventFieldsData, fetchEventFieldsData, activityEquipmentFieldsData, fetchActivityEquipmentsFieldsData, addNewActivityData, createNewEvent  }}>
      {children}
    </SchedulerContext.Provider>
  );
};
