import React from "react";
import "../LoadingSpinner.css"; // Import the CSS for styling

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
