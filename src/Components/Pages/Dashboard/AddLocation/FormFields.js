import "./formfields.css";
const FormFields = () => {
  return (
    <div className="location-form-fields">
      <h2>Form Fields</h2>
      <div className="form-field-content">
        <form className="form-field">
          <div className="form-field-item">
            <label>Location Name</label>
            <input type="text" />
          </div>
          <div className="form-field-item">
            <label>Address</label>
            <input type="text" />
          </div>
          <div className="form-field-item">
            <label>Location Type</label>
            <input type="text" />
          </div>
          <div className="form-field-item">
            <label>Location Name</label>
            <input type="text" />
          </div>
        </form>
        <div className="location-map">
          <div className="label-map">
            <label>Choose Your Location on Google Maps</label>
            <div className="map-ui"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFields;
