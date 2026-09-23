import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-void text-ghost font-sans flex items-center justify-center px-8">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>404 — Page introuvable | HGO Automation</title>
      </Helmet>
      <div className="text-center max-w-lg">
        <p className="label-cond mb-4 block">Erreur 404</p>
        <h1 className="text-7xl md:text-[10rem] font-serif italic leading-none mb-6">
          Perdu.
        </h1>
        <p className="text-ghost/40 text-lg font-light mb-10">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="btn-cyan"
        >
          Retour à l'accueil <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
