import { PiPlus } from "react-icons/pi";
import "./createevent.css";

const CreateEvent = () => {
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
            <input type="date" />
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
            <button type="submit" className="btn black">
              <PiPlus /> Add Activity
            </button>
          </div>
        </form>

        <form>
          <div className="form-item">
            <label>Choose Equipment</label>
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
            <button type="submit" className="btn black">
              <PiPlus /> Add Activity
            </button>
          </div>
        </form>
      </div>
<hr/>
      <div className="create-event-item">
        <h2>Assign Team</h2>
        <form>
          <div className="form-item">
            <label>Trainers</label>
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
            <input type="date" />
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

        <form className="map-form">
          <div className="form-item">
            <label>Upload Map</label>
            <input type="text" />
          </div>

          <div className="form-item">
            <label>Notes</label>
            <textarea rows="4" cols="50"></textarea>
          </div>

          <div className="form-item">
            <label>Status</label>
            <select>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </form>
        
      </div>
      <div className="from-btns">
          <button type="submit" className="btn gold">
            Create New Event
          </button>
          <button type="reset" className="btn black">
            Cancel
          </button>
        </div>
    </div>
  );
};
export default CreateEvent;
