const ViewEvent = () => {
  return (
    <div className="create-event-page">
      <div className="create-event-item">
        <h2>Event Information</h2>
        <form>
          <div className="form-item">
            <label>Event Name</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Event Type</label>
            <select>
              <option value="training">Training</option>
              <option value="match">Match</option>
              <option value="tournament">Tournament</option>
              <option value="workshop">Workshop</option>
            </select>
          </div>
          <div className="form-item">
            <label>Date</label>
            <input name="event_date" type="text" placeholder="mm-dd-yyy" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'}/>
          </div>

          <div className="form-item">
            <label>Time Slot</label>
            <input type="text" />
          </div>

          <div className="form-item">
            <label>Sport</label>
            <input type="text" />
          </div>
        </form>

        <form>
          <div className="form-item">
            <label>Choose Activities</label>
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>
        </form>

        <form>
          <div className="form-item">
            <label>Chosen Add-Ons</label>
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>
        </form>
      </div>
      <hr />
 
      <div className="create-event-item">
        <h2>Assign Team</h2>
        <form>
          <div className="form-item">
            <label>Equipment</label>
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>
          <div className="form-item">
            <input type="text" />
          </div>
          <div className="form-item">
            <input type="text" />
          </div>
          <div className="form-item">
            <input type="text" />
          </div>
        </form>

        <form>
          <div className="form-item">
            <label>Trainers</label>
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>
        </form>

        <form>
          <div className="form-item">
            <label>Supervisors</label>
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>

          <div className="form-item">
            <input type="text" />
          </div>
        </form>

        <form className="map-form">
          <div className="form-item">
            <label>Notes</label>
            <textarea />
          </div>

          <div className="form-item">
            <label>Status</label>
            <select>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </form>
      </div>
      <div className="from-btns">
          <button type="submit" className="btn gold">
            Update
          </button>
          <button type="reset" className="btn black">
            Cancel
          </button>
        </div>
    </div>
  );
};
export default ViewEvent;
