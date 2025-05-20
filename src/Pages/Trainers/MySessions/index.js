import Header from "../../../Components/Header/Header";
import "./style.css";

export default function SessionDashboard() {
  return (
    <div className="dashboard-wrapper">
      <Header />
      <div className="content-layout">
        {/* <Sidebar /> */}
        <div className="primary-content">
          <h2 className="section-title">My Booked Sessions</h2>

          <div className="filter-controls">
            {[
              "Time Period",
              "Booking Status",
              "Activity Type",
              "Sports Category",
            ].map((label) => (
              <button key={label} className="selector-btn">
                {label}
              </button>
            ))}
          </div>

          <div className="data-table-wrapper">
            <table className="data-grid">
              <thead>
                <tr className="grid-header">
                  {[
                    "Scheduled Date",
                    "Venue",
                    "Activity",
                    "Session Format",
                    "Participants",
                    "Booking State",
                  ].map((heading) => (
                    <th key={heading}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <tr key={idx} className="grid-row">
                      <td colSpan={6}>{/* Empty row */}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
