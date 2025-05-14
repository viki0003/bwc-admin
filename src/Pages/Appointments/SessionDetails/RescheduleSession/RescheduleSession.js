import './reschedulesession.css'
const RescheduleSession = () => {
  return (
    <div className="reschedule-session">
      <h1>Rescheduling Session</h1>
      <div className="reschedule-session-form">
        <form>
          <div className="form-group">
            <div className="fg-item">
              <label>Select New Date</label>
              <input type="date" />
            </div>
            <div className="fg-item">
              <label>Select New Time</label>
              <input type="time" />
            </div>
          </div>
          <div className="form-group rs-ta">
            <div className="fg-item">
              <label>Message </label>
              <textarea rows="4" />
            </div>
          </div>
          <div className="submit-btn">
            <button type="submit" className="btn black">
              Modify Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RescheduleSession;
