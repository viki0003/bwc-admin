
import "./parentinfo.css"
const ParentInfo = () => {
  
  return (
    <div className="parent-info">
      <div className="parent-info-header">
        <div className="pih-item">
          <p>Parent Name:</p>
        </div>
        <div className="pih-item">
          <p>Phone:</p>
        </div>
        <div className="pih-item">
          <p>Email Id:</p>
        </div>
        <div className="pih-item">
          <p>Payment Mode:</p>
        </div>
      </div>
      <hr />
      <div className="associated-players">
        <h3>Associated Player:</h3>
        <div className="ap-list">
          <div className="ap-item">
            <div className="api-img"></div>
            <div className="api-content">
              <p>Name:</p>
              <div className="api-ga">
                <p>Age:</p>
                <p>Grade:</p>
              </div>
              <p>Packages:</p>
              <button>View Player Profile</button>
            </div>
          </div>
          <div className="ap-item">
            <div className="api-img"></div>
            <div className="api-content">
              <p>Name:</p>
              <div className="api-ga">
                <p>Age:</p>
                <p>Grade:</p>
              </div>
              <p>Packages:</p>
              <button>View Player Profile</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default ParentInfo;
