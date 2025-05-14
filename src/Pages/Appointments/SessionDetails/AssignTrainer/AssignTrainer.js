import "./assigntrainer.css";
const AssignTrainer = () => {
  return (
    <>
      <div className="assign-trainer">
        <div className="at-header">
          <div className="at-header-item">
            <strong>Session Type:</strong>
            <p>1-on-1</p>
          </div>
          <div className="at-header-item">
            <strong>Date & Time:</strong>
            <p>Apr 14, 5:00 PM</p>
          </div>
          <div className="at-header-item">
            <strong>Sport:</strong>
            <p>Soccer</p>
          </div>
          <div className="at-header-item">
            <strong>Location:</strong>
            <p>Holy Family</p>
          </div>
        </div>
        <div className="slct-trainer">
          <p>Select Trainer : </p>
          <select className="trainer-select">
            <option value="trainer1">List of Trainers</option>
            <option value="trainer2">Trainer 2</option>
            <option value="trainer3">Trainer 3</option>
          </select>
        </div>

        <div className="slct-trainer">
          <p>Message to Trainer: </p>
          <textarea
            className="trainer-message"
            placeholder="You have been assigned a new session at [Location] on [Date]. Please confirm availability."
            rows="4"
            cols="50"
          />
        </div>
        <div className="at-btns">
          <button className="btn gold">Assign Trainer</button>
          <button className="btn white">Cancel</button>
        </div>
      </div>
    </>
  );
};
export default AssignTrainer;
