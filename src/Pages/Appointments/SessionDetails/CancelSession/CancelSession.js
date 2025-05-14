import "./cancelsession.css";

const CancelSession = () => {
  return (
    <div className="cancel-session">
      <h1>You are cancelling the Session:</h1>
      <div className="cs-row">
        <div className="cs-col">
          <strong>Session Type:</strong>
          <span>1-on-1</span>
        </div>
        <div className="cs-col">
          <strong>Date & Time:</strong>
          <span>Apr 14, 5:00 PM</span>
        </div>
        <div className="cs-col">
          <strong>Sport:</strong>
          <span>Soccer</span>
        </div>
      </div>
      <div className="cs-row">
        <div className="cs-col">
          <strong>Location:</strong>
          <span>Holy Family</span>
        </div>
        <div className="cs-col">
          <strong>Assigned Trainer:</strong>
          <span>Coach Mike</span>
        </div>
      </div>
      <hr />
      <div className="note-field">
        <label>Add a Note for Parents:</label>
        <textarea rows="5" cols="50" />
      </div>
    </div>
  );
};

export default CancelSession;
