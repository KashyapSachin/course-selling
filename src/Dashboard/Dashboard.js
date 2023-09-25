import React, { Component } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <div className="top">
            <div className="left">
              <div className="header">Statistics</div>
            </div>
            <div className="right">
              <div className="header">My Quizzes</div>
            </div>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
