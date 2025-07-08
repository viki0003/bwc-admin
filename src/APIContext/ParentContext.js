import React, { createContext, useEffect, useState, useRef, useCallback } from "react";
import axiosInstance from "../Config/axios";
import { Toast } from "primereact/toast";
import { useLocation } from "react-router-dom";

export const ParentContext = createContext();

export const ParentProvider = ({ children, user }) => {
  const [parentProfiles, setParentProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const toastRef = useRef(null);
  const location = useLocation();

  const fetchCurrentParents = useCallback(async () => {
    const token = localStorage.getItem("accessToken");

    if (!token || !user?.id) {
      setParentProfiles([]);
      setLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.get("/customer/parent-account/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(response.data)) {
        setParentProfiles(response.data);
      } else {
        setParentProfiles([]);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.detail || "Failed to fetch parent";
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: errorMessage,
        life: 3000,
      });
      setParentProfiles([]);
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    setLoading(true);
    fetchCurrentParents();
  }, [fetchCurrentParents, location.pathname]);

  return (
    <ParentContext.Provider
      value={{
        parentProfiles,
        loading,
        fetchCurrentParents,
      }}
    >
      <Toast ref={toastRef} />
      {children}
    </ParentContext.Provider>
  );
};
