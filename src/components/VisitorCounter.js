// VisitorCounter.js

import React, { useState, useEffect } from 'react';

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Load the visitor count from local storage if available
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      setVisitorCount(parseInt(storedCount, 10));
    } else {
      setVisitorCount(0);
    }
  }, []);

  useEffect(() => {
    // Update the visitor count in local storage
    localStorage.setItem('visitorCount', visitorCount.toString());
  }, [visitorCount]);

  const incrementVisitorCount = () => {
    setVisitorCount(visitorCount + 1);
  };

  return (
    <div>
      <h2>If you are new please click below button....{visitorCount}</h2>
      <button onClick={incrementVisitorCount}>Increment Count</button>
    </div>
  );
}

export default VisitorCounter;
