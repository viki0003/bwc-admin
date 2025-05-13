import "./playerinfo.css";
const PlayerInfo = () => {
  return (
    <div className="player-info">
      <div className="player-info-header">
        <div className="pih-item">
          <p>Player Name:</p>
        </div>
        <div className="pih-item">
          <p>Age:</p>
        </div>
        <div className="pih-item">
          <p>Date of Birth:</p>
        </div>
        <div className="pih-item">
          <p>Grade:</p>
        </div>
        <div className="pih-item">
          <p>Phone:</p>
        </div>
        <div className="pih-item">
          <p>Payment Mode:</p>
        </div>
      </div>
      <hr />
      <div className="associated-parents">
        <div className="ap-list">
          <div className="asspr-item">
            <label>Associated Parent:</label>
            <div className="ap-item">
              <div className="api-img"></div>
              <div className="api-content">
                <div className="ac-cnt">
                  <p>Name:</p>
                  <p>Packages:</p>
                </div>

                <button>View Parent Profile</button>
              </div>
            </div>
          </div>

          <div className="asspr-item">
            <label>Upload Their Pictures:</label>
            <div className="ap-item">
              <div className="api-img"></div>
            </div>
          </div>

          <div className="asspr-item">
            <label>Add their Achievements:</label>
            <div className="ap-item">
              <div className="api-img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayerInfo;
