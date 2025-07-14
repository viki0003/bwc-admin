import React, { useContext, useEffect, useState } from "react";
import "./ParentProfiles.css";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import { ParentContext } from "../../../APIContext/ParentContext";
import Loader from "../../../Components/Loader/Loader";

const ParentProfiles = () => {
  const { parentProfiles, loading } = useContext(ParentContext);
  const [filteredParents, setFilteredParents] = useState([]);

  const getParentSlug = (parent) => {
    const first = parent.user?.first_name || "";
    const last = parent.user?.last_name || "";
    return `${first}-${last}`.toLowerCase().replace(/\s+/g, "-");
  };

  useEffect(() => {
    if (Array.isArray(parentProfiles)) {
      const validParents = parentProfiles.filter((p) => p.user !== null);
      setFilteredParents(validParents);
    }
  }, [parentProfiles]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const results = parentProfiles
      .filter((parent) => parent.user !== null)
      .filter((parent) => {
        const fullName = `${parent.user.first_name} ${parent.user.last_name}`.toLowerCase();
        return fullName.includes(query);
      });
    setFilteredParents(results);
  };

  if (loading) return <Loader message="Loading Parent Profiles..." />;

  return (
    <div className="trainer-management">
      {/* <Link to="/trainermanagement/add-trainer" className="btn">
        Add New Parent
      </Link> */}

      <div className="trainer-management-table">
        <h6>Parent Profiles</h6>
        <div className="trainer-management-table-header">
          <div className="search-table">
            <div className="search-container">
              <input type="search" placeholder="Search..." onChange={handleSearch} />
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
                <th>Email</th>
                <th>Phone</th>
                <th>Type</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredParents.length > 0 ? (
                filteredParents.map((parent) => (
                  <tr key={parent.id}>
                    <td>
                      {parent.user
                        ? `${parent.user.first_name} ${parent.user.last_name}`
                        : "N/A"}
                    </td>
                    <td>{parent.user?.email || "N/A"}</td>
                    <td>{parent.phone || "N/A"}</td>
                    <td>{parent.is_self_pay ? "Self Pay" : "Corporate"}</td>
                    <td>{parent.address || "N/A"}</td>
                    <td>
                      <Link
                        to={`/user-management/parent-info/${getParentSlug(parent)}`}
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
                    No parent profiles found.
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

export default ParentProfiles;
