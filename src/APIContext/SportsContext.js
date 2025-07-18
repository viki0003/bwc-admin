import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";
import axiosInstance from "../Config/axios";
import { Toast } from "primereact/toast";

const SportsContext = createContext();
export const useSports = () => useContext(SportsContext);

export const SportsProvider = ({ children }) => {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(false);
  const toastRef = useRef(null);

  const showToast = (type, summary, detail) => {
    toastRef.current?.show({
      severity: type,
      summary,
      detail,
      life: 3000,
    });
  };

  const fetchSports = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/adminpanel/sports/");
      setSports(response.data);
    } catch (err) {
      showToast("error", "Error", "Failed to load sports");
    } finally {
      setLoading(false);
    }
  }, []);

  const createSport = async (data) => {
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    if (!(data instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    try {
      const response = await axiosInstance.post("/adminpanel/sports/", data, { headers });
      await fetchSports();
      showToast("success", "Success", "Sport created successfully");
      return { success: true, data: response.data };
    } catch (err) {
      const errorMsg = err.response?.data?.image?.[0] || "Failed to create sport";
      showToast("error", "Error", errorMsg);
      return { success: false, error: errorMsg };
    }
  };

  const deleteSport = async (id) => {
    try {
      await axiosInstance.delete(`/adminpanel/sports/${id}/`);
      await fetchSports();
      showToast("success", "Deleted", "Sport deleted successfully");
    } catch (err) {
      showToast("error", "Error", "Failed to delete sport");
    }
  };

  const toggleSportActive = async (id, is_active) => {
    try {
      await axiosInstance.patch(`/adminpanel/sports/${id}/`, { is_active });
      await fetchSports();
    } catch (err) {
      showToast("error", "Error", "Failed to update status");
    }
  };

  const updateSport = async (id, data) => {
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  
    if (!(data instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }
  
    try {
      const response = await axiosInstance.patch(`/adminpanel/sports/${id}/`, data, { headers });
      await fetchSports();
      showToast("success", "Updated", "Sport updated successfully");
      return { success: true, data: response.data };
    } catch (err) {
      const errorMsg = err.response?.data?.image?.[0] || "Failed to update sport";
      showToast("error", "Error", errorMsg);
      return { success: false, error: errorMsg };
    }
  };

  useEffect(() => {
    fetchSports();
  }, [fetchSports]);

  return (
    <SportsContext.Provider
      value={{
        sports,
        loading,
        fetchSports,
        createSport,
        deleteSport,
        toggleSportActive,
        updateSport,
        toastRef
      }}
    >
      <Toast ref={toastRef} />
      {children}
    </SportsContext.Provider>
  );
};
