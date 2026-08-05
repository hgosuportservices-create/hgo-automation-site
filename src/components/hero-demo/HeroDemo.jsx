import React from 'react';
import WorkflowAnimation from './WorkflowAnimation';

/**
 * Démonstration interactive du fonctionnement d'un agent IA, utilisée en
 * remplacement du mockup statique dans le Hero de /services/agent-ia.
 * Ne modifie ni la colonne de texte à gauche, ni la palette, ni le layout du Hero.
 */
export default function HeroDemo() {
  return (
    <div className="w-full flex justify-center">
      <WorkflowAnimation />
    </div>
  );
}
