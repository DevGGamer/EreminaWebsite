import React, { useState } from 'react';

function ReasonCard({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <div className="reason-card card-container" onClick={handleClick}>
           <h3>{title}</h3>
           <p className={isExpanded ? 'expanded' : 'hidden'}>{content}</p>
      </div>
  );
}

export default ReasonCard;