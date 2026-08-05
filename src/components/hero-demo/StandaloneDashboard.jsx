import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import Dashboard from './Dashboard';

const REPLAY_MS = 5000;

/**
 * Version autonome de Dashboard.jsx : toujours visible, rejoue les compteurs
 * et sparklines périodiquement. Utilisé comme visuel de hero pour la page
 * "Applications & Dashboards", sans dépendre du state machine WorkflowAnimation.
 */
export default function StandaloneDashboard({ className }) {
  const reduceMotion = useReducedMotion();
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => setLoopKey((k) => k + 1), REPLAY_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="w-full max-w-md">
      <Dashboard visible loopKey={loopKey} className={className} />
    </div>
  );
}
