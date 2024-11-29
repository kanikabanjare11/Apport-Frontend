import React from 'react';
import '../styles/TicketCard.css';
import FeatureIcon from '../icons_FEtask/Backlog.svg'; // Adjust the path as needed

const TicketCard = ({ task }) => (
  <div className="ticket-card">
    <div className="ticket-header">
      <h3>{task.id}</h3>
      <img src="https://via.placeholder.com/30" alt="User Avatar" className="user-avatar" />
    </div>
    <p>{task.title}</p>
    <div className="ticket-footer">
      <img src={FeatureIcon} alt="Feature Icon" className="feature-icon" />
      <span className="ticket-type">Feature Request</span>
    </div>
  </div>
);

export default TicketCard;
