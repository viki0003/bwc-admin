import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import axiosInstance from "../Config/axios";
import { Toast } from "primereact/toast";

const SportsContext = createContext();
export const useSports = () => useContext(SportsContext);

export const SportsProvider = ({ children }) => {
  const [sports, setSports] = useState([]);
  const toastRef = useRef(null);

  const fetchSports = async () => {
    try {
      const response = await axiosInstance.get("/adminpanel/sports/");
      setSports(response.data);
    } catch (err) {
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to load sports",
        life: 3000,
      });
    }
  };

  const createSport = async (data) => {
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  
    // Set content type only if it's not FormData
    if (!(data instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }
  
    try {
      const response = await axiosInstance.post("/adminpanel/sports/", data, {
        headers,
      });
  
      await fetchSports(); // Optional: refresh the list
      return { success: true, data: response.data };
    } catch (err) {
      console.error("Failed to create sport:", err.response?.data);
      return { success: false, error: err.response?.data || "Unknown error" };
    }
  };

  const deleteSport = async (id) => {
    try {
      await axiosInstance.delete(`/adminpanel/sports/${id}/`);
      fetchSports();
      toastRef.current?.show({
        severity: "success",
        summary: "Deleted",
        detail: "Sport deleted successfully",
        life: 3000,
      });
    } catch (err) {
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to delete sport",
        life: 3000,
      });
    }
  };

  const toggleSportActive = async (id, is_active) => {
    try {
      await axiosInstance.patch(`/adminpanel/sports/${id}/`, { is_active });
      fetchSports();
    } catch (err) {
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to update status",
        life: 3000,
      });
    }
  };

  useEffect(() => {
    fetchSports();
  }, []);

  return (
    <SportsContext.Provider value={{ sports, fetchSports, createSport, deleteSport, toggleSportActive }}>
      <Toast ref={toastRef} />
      {children}
    </SportsContext.Provider>
  );
};
