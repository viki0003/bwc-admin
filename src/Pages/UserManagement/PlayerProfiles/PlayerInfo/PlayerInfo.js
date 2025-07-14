import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { usePlayerAccount } from "../../../../APIContext/PlayerAccountContext";
import { MEDIA_BASE_URL } from "../../../../Config/Config";
import "./playerinfo.css";

const PlayerInfo = () => {
  const { slug } = useParams();
  const { players, fetchPlayers } = usePlayerAccount();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  useEffect(() => {
    if (players.length > 0 && slug) {
      const normalizedSlug = slug.toLowerCase().replace(/-/g, " ");
      const found = players.find(
        (p) => p.name.toLowerCase() === normalizedSlug
      );
      setPlayer(found);
    }
  }, [players, slug]);

  if (!player) return <p>Loading player info...</p>;

  const parent = player.parent_details || {};
  const user = parent.user || {};

  return (
    <div className="player-info">
      <div className="player-info-header">
        <div className="pih-item">
          <p>
            <strong>Player Name:</strong> {player.name}
          </p>
        </div>
        <div className="pih-item">
          <p>
            <strong>Age:</strong> {player.age}
          </p>
        </div>
        <div className="pih-item">
          <p>
            <strong>Date of Birth:</strong> {player.date_of_birth}
          </p>
        </div>
        <div className="pih-item">
          <p>
            <strong>Grade:</strong> {player.grade}
          </p>
        </div>
        <div className="pih-item">
          <p>
            <strong>Phone:</strong> {parent.phone}
          </p>
        </div>
        <div className="pih-item">
          <p>
            <strong>Payment Mode:</strong>{" "}
            {parent.is_self_pay ? "Self Pay" : "Corporate"}
          </p>
        </div>
      </div>
      <hr />
      <div className="associated-parents">
        <div className="ap-list">
          <div className="asspr-item">
            <label>Associated Parent:</label>
            <div className="ap-item">
              <div className="api-img">
                <img
                  src={
                    parent.profile_picture
                      ? `${MEDIA_BASE_URL}${parent.profile_picture}`
                      : "/placeholder.jpg"
                  }
                  alt="Parent"
                />
              </div>
              <div className="api-content">
                <div className="ac-cnt">
                  <p>
                    <strong>Name:</strong> {user.first_name} {user.last_name}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                </div>
                <Link
                  to={`/user-management/parent-info/${`${user.first_name} ${user.last_name}`
                    ?.toLowerCase()
                    .replace(/\s+/g, "-")}`}
                    className="btn black w-full"
                >
                  View Parent Profile
                </Link>
              </div>
            </div>
          </div>

          <div className="asspr-item">
            <label>Upload Their Pictures:</label>
            <div className="ap-item">
              <div className="api-img">
                <img
                  src={
                    player.profile_picture
                      ? `${MEDIA_BASE_URL}${player.profile_picture}`
                      : "/placeholder.jpg"
                  }
                  alt="Player"
                />
              </div>
            </div>
          </div>

          <div className="asspr-item">
            <label>Add their Achievements:</label>
            <div className="ap-item">
              <div className="api-img">
                {/* Add logic for achievements here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
