// TrainerAccountContext.js
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
  } from "react";
  import axiosInstance from "../Config/axios";
  import BASE_API_URL from "../Config/Config";
  import { useLogin } from "./LoginContext";
  
  const TrainerAccountContext = createContext();
  export const useTrainerAccounts = () => useContext(TrainerAccountContext);
  
  export const TrainerAccountProvider = ({ children }) => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useLogin();
  
    const baseURL = `${BASE_API_URL}/trainer/trainer-account/`;
  
    const fetchTrainers = useCallback(async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(baseURL);
        console.log("API Response:", res.data);
  
        if (Array.isArray(res.data)) {
          setTrainers(res.data);
        } else if (res.data) {
          setTrainers([res.data]); // wrap single object in array
        } else {
          setTrainers([]);
        }
      } catch (err) {
        console.error("Failed to fetch trainers:", err);
        setTrainers([]);
      } finally {
        setLoading(false);
      }
    }, [baseURL]);
  
    const createTrainer = async (trainerData) => {
      try {
        const res = await axiosInstance.post(baseURL, trainerData);
        await fetchTrainers();
        return res.data;
      } catch (err) {
        console.error("Trainer creation failed:", err);
        throw err;
      }
    };
  
    const updateTrainer = async (id, updatedData) => {
      try {
        const res = await axiosInstance.patch(`${baseURL}${id}/`, updatedData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        await fetchTrainers();
        return res.data;
      } catch (err) {
        console.error("Trainer update failed:", err.response?.data || err);
        throw err;
      }
    };
  
    useEffect(() => {
      if (user) {
        fetchTrainers();
      }
    }, [user, fetchTrainers]);
  
    return (
      <TrainerAccountContext.Provider
        value={{
          trainers,
          loading,
          fetchTrainers,
          createTrainer,
          updateTrainer,
        }}
      >
        {children}
      </TrainerAccountContext.Provider>
    );
  };
  