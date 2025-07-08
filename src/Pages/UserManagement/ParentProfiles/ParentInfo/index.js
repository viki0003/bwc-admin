import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../../../../Config/axios";
import Loader from "../../../../Components/Loader/Loader";
import "./parentinfo.css";

const ParentInfo = () => {
  const { id } = useParams();
  const [parent, setParent] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchParentDetails = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const response = await axiosInstance.get(`/customer/parent-account?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setParent(response.data);
    } catch (error) {
      console.error("Failed to fetch parent info:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParentDetails();
  }, [id]);

  if (loading) return <Loader message="Loading Parent Info..." />;

  const user = parent?.user || {};
  const players = parent?.players || []; // assuming API gives `players` key

  return (
    <div className="parent-info">
      <div className="parent-info-header">
        <div className="pih-item">
          <p><strong>Parent Name:</strong> {user.first_name} {user.last_name}</p>
        </div>
        <div className="pih-item">
          <p><strong>Phone:</strong> {parent?.phone || "N/A"}</p>
        </div>
        <div className="pih-item">
          <p><strong>Email Id:</strong> {user.email || "N/A"}</p>
        </div>
        <div className="pih-item">
          <p><strong>Payment Mode:</strong> {parent?.is_self_pay ? "Self Pay" : "Corporate"}</p>
        </div>
      </div>

      <hr />

      <div className="associated-players">
        <h3>Associated Players:</h3>
        <div className="ap-list">
          {players.length > 0 ? (
            players.map((player) => (
              <div className="ap-item" key={player.id}>
                <div className="api-img">
                  <img
                    src={player.profile_picture || "/placeholder.jpg"}
                    alt={player.name}
                  />
                </div>
                <div className="api-content">
                  <p><strong>Name:</strong> {player.name}</p>
                  <div className="api-ga">
                    <p><strong>Age:</strong> {player.age}</p>
                    <p><strong>Grade:</strong> {player.grade}</p>
                  </div>
                  <p><strong>Packages:</strong> {player.package_name || "N/A"}</p>
                  <Link to={`/user-management/player-info/${player.id}`}>
                    <button>View Player Profile</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No players associated.</p>
          )}
        </div>
      </div>

      <hr />
    </div>
  );
};

export default ParentInfo;
