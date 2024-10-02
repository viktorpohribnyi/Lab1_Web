import React from "react";
import { useHistoryTracker } from "../hooks/useHistoryTracker";

const Debug = () => {
  const { history, navigateAndTrack } = useHistoryTracker();

  return (
    <div className="debug-window">
      <h2>Debug Window</h2>
      <button className="button" onClick={() => navigateAndTrack("/profile")}>
        Go to Profile
      </button>
      <button className="button" onClick={() => navigateAndTrack("/categories")}>
        Go to Categories
      </button>
      <h3>History:</h3>
      <ul>
        {history.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ul>
    </div>
  );
};

export default Debug;
