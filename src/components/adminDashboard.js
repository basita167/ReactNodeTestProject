import React from "react";
import "../assets/adminDashboard.css";

const AdminDashboard = ({logs}) => {
 
// console.log(logs);
  return (
  
  
    <div className="dashboard">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">AdminPanel</h2>
        <ul className="menu">
          <li className="active">Dashboard</li>
          <li>Users</li>
          <li>Analytics</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main">
        
        {/* Header */}
        <header className="header">
          <h1>Dashboard</h1>
          <div className="profile">
            <span>Admin</span>
            <img
              src="../assets/profilePic.jpeg"
              alt="profile"
            />
          </div>
        </header>

        {/* Stats Cards */}
        <div className="cards">
          <div className="card">
            <h3>Users</h3>
            <p>1,245</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$8,540</p>
          </div>
          <div className="card">
            <h3>Orders</h3>
            <p>320</p>
          </div>
          <div className="card">
            <h3>Growth</h3>
            <p>+12%</p>
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <h2>User Logs</h2>

          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>

            <tbody>
              {logs.map((log, index) => (
              
                <tr key={index}>
                  <td>{log.username}</td>
                  <td>{log.email}</td>
                  <td>{log.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        
        
        
        
        
      </div>
    </div>
  );
};

export default AdminDashboard;
