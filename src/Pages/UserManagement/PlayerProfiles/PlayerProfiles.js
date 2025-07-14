import React, { useEffect, useState } from "react";
import "./PlayerProfiles.css";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import { usePlayerAccount } from "../../../APIContext/PlayerAccountContext";
import Loader from "../../../Components/Loader/Loader";

const PlayerProfiles = () => {
  const { players, fetchPlayers } = usePlayerAccount();
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  useEffect(() => {
    setFilteredPlayers(players);
  }, [players]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const result = players.filter((player) => {
      const playerName = player.name?.toLowerCase() || "";
      const parentName = `${player.parent_details?.user?.first_name ?? ""} ${
        player.parent_details?.user?.last_name ?? ""
      }`.toLowerCase();
      return playerName.includes(query) || parentName.includes(query);
    });
    setFilteredPlayers(result);
  };

  if (!players.length) return <Loader message="Loading Player Profiles..." />;

  return (
    <div className="trainer-management">
      <div className="trainer-management-table">
        <h6>Player Profiles</h6>
        <div className="trainer-management-table-header">
          <div className="search-table">
            <div className="search-container">
              <input
                type="search"
                placeholder="Search..."
                onChange={handleSearch}
              />
              <span>
                <SearchIcon />
              </span>
            </div>
            <div className="filterbtn">
              <input type="date" />
            </div>
            <div className="filterbtn">
              <select>
                <option value="All">Location</option>
              </select>
            </div>
            <div className="filterbtn">
              <select>
                <option value="All">Status</option>
              </select>
            </div>
          </div>
        </div>

        <div className="trainer-management-table-body">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Parent Name</th>
                <th>Package</th>
                <th>Session Left</th>
                <th>Sport</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                  <tr key={player.id}>
                    <td>{player.name}</td>
                    <td>
                      {player.parent_details?.user?.first_name}{" "}
                      {player.parent_details?.user?.last_name}
                    </td>
                    <td>{player.package_name || "N/A"}</td>
                    <td>{player.session_left || 0}</td>
                    <td>{player.sport || "N/A"}</td>
                    <td>
                      <Link
                        to={`/user-management/player-info/${player.name
                          ?.toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="btn black w-full"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    No player profiles found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfiles;
