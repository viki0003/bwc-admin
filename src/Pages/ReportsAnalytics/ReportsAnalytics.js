import React from "react";
import "./reportsanalytics.css";
const ReportsAnalytics = () => {
  return (
    <div className="reports-analytics">
      <div className="block-analytics">
        <h4>Session Metrics</h4>
        <div className="block-analytics-lists">
          <div className="block-analytics-item">
            <div className="block-analytics-item-icon"></div>
            <p>First Sessions This Week</p>
          </div>
          <div className="block-analytics-item">
            <div className="block-analytics-item-icon"></div>
            <p>Sessions This Week</p>
          </div>
          <div className="block-analytics-item">
            <div className="block-analytics-item-icon"></div>
            <p>Sessions This Month</p>
          </div>
          <div className="block-analytics-item">
            <div className="block-analytics-item-icon"></div>
            <p>Best Day of the Week</p>
          </div>
          <div className="block-analytics-item">
            <div className="block-group-anlytcs">
              <div className="block-analytics-item-icon"></div>
              <div className="vertical-line">
                <span></span>
              </div>
              <div className="block-analytics-item-icon"></div>
            </div>
            <p>1-on-1 vs Group Breakdown</p>
          </div>
        </div>
      </div>
      <div className="block-analytics">
        <h4>Subscription Metrics</h4>
        <div className="block-analytics-lists">
          <div className="block-analytics-item">
            <div className="block-analytics-item-icon"></div>
            <p>Unlimited Subscription Members</p>
          </div>
        </div>
      </div>
      <div className="block-analytics">
        <h4>Trainer Performance</h4>
        <div className="block-analytics-lists">
          <div className="block-analytics-item">
            <div className="block-analytics-item-icon"></div>
            <p>Top Trainer of the Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportsAnalytics;
