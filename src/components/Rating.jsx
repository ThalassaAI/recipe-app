import React from "react";

const Rating = ({ rating, showRating = false, className = "" }) => {
  const safeRating = Math.min(Math.max(rating, 1.0), 5.0);

  const stars = [1, 2, 3, 4, 5].map((starValue, idx) => {
    if (safeRating >= starValue) {
      return <i key={idx} className="bi bi-star-fill text-warning"></i>;
    } else if (safeRating >= starValue - 0.5) {
      return <i key={idx} className="bi bi-star-half text-warning"></i>;
    } else {
      return <i key={idx} className="bi bi-star text-warning"></i>;
    }
  });

  return (
    <div className={`d-flex align-items-center ${className}`}>
      {stars}
      {showRating && (
        <span className="ms-2 fw-bold">{safeRating.toFixed(2)}</span>
      )}
    </div>
  );
};

export default Rating;
