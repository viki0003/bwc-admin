import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ParentContext } from "../../../../APIContext/ParentContext";
import { usePlayerAccount } from "../../../../APIContext/PlayerAccountContext";
import Loader from "../../../../Components/Loader/Loader";
import { MEDIA_BASE_URL } from "../../../../Config/Config";
import "./parentinfo.css";

const ParentInfo = () => {
  const { slug } = useParams();
  const { parentProfiles, loading: parentLoading } = useContext(ParentContext);
  const { players, fetchPlayers } = usePlayerAccount();
  const [parent, setParent] = useState(null);
  const [associatedPlayers, setAssociatedPlayers] = useState([]);

  // Normalize slug: "vikram-pawar" -> "vikram pawar"
  const normalizedSlug = slug?.toLowerCase().replace(/-/g, " ");

  // Find parent from context using slug
  useEffect(() => {
    if (parentProfiles.length > 0 && normalizedSlug) {
      const matchedParent = parentProfiles.find((p) => {
        const fullName = `${p.user?.first_name ?? ""} ${
          p.user?.last_name ?? ""
        }`.toLowerCase();
        return fullName === normalizedSlug;
      });

      setParent(matchedParent || null);
    }
  }, [parentProfiles, normalizedSlug]);

  // Fetch players
  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  // Match players to this parent
  useEffect(() => {
    if (players.length > 0 && parent?.id) {
      const matched = players.filter(
        (player) => player.parent_details?.id === parent.id
      );
      setAssociatedPlayers(matched);
    }
  }, [players, parent]);

  if (parentLoading || !parent)
    return <Loader message="Loading Parent Info..." />;

  const user = parent.user || {};

  return (
    <div className="parent-info">
      <div className="parent-info-header">
        <div className="pih-item">
          <p>
            <strong>Parent Name:</strong> {user.first_name} {user.last_name}
          </p>
        </div>
        <div className="pih-item">
          <p>
            <strong>Phone:</strong> {parent.phone}
          </p>
        </div>
        <div className="pih-item">
          <p>
            <strong>Email Id:</strong> {user.email}
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

      <div className="associated-players">
        <h3>Associated Players:</h3>
        <div className="ap-list">
          {associatedPlayers.length > 0 ? (
            associatedPlayers.map((player) => (
              <div className="ap-item" key={player.id}>
                <div className="api-img">
                  <img
                    src={
                      player.profile_picture
                        ? `${MEDIA_BASE_URL}${player.profile_picture}`
                        : "/placeholder.jpg"
                    }
                    alt={player.name}
                  />
                </div>
                <div className="api-content">
                  <p>
                    <strong>Name:</strong> {player.name}
                  </p>
                  <div className="api-ga">
                    <p>
                      <strong>Age:</strong> {player.age}
                    </p>
                    <p>
                      <strong>Grade:</strong> {player.grade}
                    </p>
                  </div>
                  <p>
                    <strong>School:</strong> {player.school_name || "N/A"}
                  </p>
                  <Link
                    to={`/user-management/player-info/${player.name
                      ?.toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="btn black w-full"
                  >
                    View Player Profile
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No associated players found for this parent.</p>
          )}
        </div>
      </div>

      <hr />
    </div>
  );
};

export default ParentInfo;
