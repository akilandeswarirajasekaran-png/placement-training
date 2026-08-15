import React from 'react';
import './Profile.css';

function Profile() {

  const email = localStorage.getItem('userEmail') || 'guest@example.com';
  const company = localStorage.getItem('selectedCompany') || 'Not selected';

  return (

    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-avatar">
          👩‍💻
        </div>

        <h1>My Profile</h1>

        <div className="profile-info">

          <div className="info-row">
            <span>Name</span>
            <strong>Demo User</strong>
          </div>

          <div className="info-row">
            <span>Email</span>
            <strong>{email}</strong>
          </div>

          <div className="info-row">
            <span>College</span>
            <strong>Demo College</strong>
          </div>

          <div className="info-row">
            <span>Department</span>
            <strong>Computer Science</strong>
          </div>

          <div className="info-row">
            <span>Selected Company</span>
            <strong>{company}</strong>
          </div>

          <div className="info-row">
            <span>Interview Status</span>
            <strong>In Progress</strong>
          </div>

          <div className="info-row">
            <span>Previous Attempts</span>
            <strong>0</strong>
          </div>

        </div>

      </div>

    </div>

  );

}

export default Profile;