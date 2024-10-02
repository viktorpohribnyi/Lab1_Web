import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useHistoryTracker = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  const navigateAndTrack = useCallback(
    (path) => {
      setHistory((prevHistory) => [...prevHistory, path]);
      navigate(path);
    },
    [navigate]
  );

  return { history, navigateAndTrack };
};
