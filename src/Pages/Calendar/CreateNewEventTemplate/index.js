const CreateNewEventTemplate = () => {
  return (
    <div className="create-event-page">
      <div className="create-event-item">
        <h2>Event Template Information</h2>
        <form>
          <div className="form-item">
            <label>Template Name</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Number of Trainers</label>
            <input type="text" />
          </div>

          <div className="form-item">
            <label>Number of Supervisors</label>
            <input type="text" />
          </div>

          <div className="form-item">
            <label>Number of Activities</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Number of Equipment</label>
            <input type="text" />
          </div>
        </form>
      </div>
      
      <div className="from-btns">
        <button type="submit" className="btn gold">
        Create New Event Template
        </button>
        <button type="reset" className="btn black">
          Cancel
        </button>
      </div>
    </div>
  );
};
export default CreateNewEventTemplate;
