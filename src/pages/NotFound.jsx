import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-void text-ghost font-sans flex items-center justify-center px-8">
      <div className="text-center max-w-lg">
        <p className="text-[10px] font-mono uppercase tracking-widest text-cyan/60 mb-6">Erreur 404</p>
        <h1 className="text-7xl md:text-[10rem] font-serif italic leading-none mb-6">
          Perdu.
        </h1>
        <p className="text-ghost/40 text-lg font-light mb-10">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-cyan text-void px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-widest hover:bg-white transition-colors"
        >
          Retour à l'accueil <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
