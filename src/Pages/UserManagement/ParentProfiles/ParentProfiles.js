import React, { useContext } from "react";
import "./ParentProfiles.css";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Assets/Icons/SearchIcon";
import { ParentProfileContext } from "../../../APIContext/ParentProfileContext";
import Loader from "../../../Components/Loader/Loader";

const ParentProfiles = () => {
  const { parentProfiles, loading } = useContext(ParentProfileContext);

  if (loading) return <Loader message="Loading Parent Profiles..." />;

  return (
    <div className="trainer-management">
      <Link to="/trainermanagement/add-trainer" className="btn">
        Add New Parent
      </Link>

      <div className="trainer-management-table">
        <h6>Parent Profiles</h6>
        <div className="trainer-management-table-header">
          <div className="search-table">
            <div className="search-container">
              <input type="search" placeholder="Search..." />
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
              {parentProfiles.map((parent) => (
                <tr key={parent.id}>
                  <td>
                    {parent.user?.first_name} {parent.user?.last_name}
                  </td>
                  <td>{parent.user?.email}</td>
                  <td>{parent.phone}</td>
                  <td>{parent.is_self_pay ? "Self Pay" : ""}</td>
                  <td>{parent.address}</td>
                  <td>
                    <Link
                      to="/user-management/parent-info"
                      className="btn black w-full"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ParentProfiles;
