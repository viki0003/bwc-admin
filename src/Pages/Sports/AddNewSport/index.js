import React from "react";
import "./addsports.css";

const AddNewSport = () => {
  return (
    <div className="add-new-sport">
      <form className="add-sport-form">
        <div className="form-group">
          <div className="sport-img">
            <img src="https://via.placeholder.com/150" alt="Sport" />
          </div>
          <div className="form-fields-details">
            <div className="ff-fields">
              <div className="ff-item">
                <label htmlFor="sportName">Sports Name</label>
                <input type="text" />
              </div>

              <div className="ff-item">
                <label htmlFor="sportName">Sports Description</label>
                <input type="text" />
              </div>
            </div>
            <div className="ff-btns">
                <button type="submit" className="btn gold">Save Sport</button>
                <button type="submit" className="btn grey">Cancel</button>
            </div>
          </div>
        </div>
     
      </form>
    </div>
  );
};
export default AddNewSport;
