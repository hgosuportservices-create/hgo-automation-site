import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Activity, Database, Terminal, Cpu } from 'lucide-react';
import SharedNav from '../components/SharedNav';

export default function MentionsLegales() {
  return (
    <main className="min-h-screen text-ghost font-sans bg-void">
      <Helmet>
        <title>Mentions Légales — HGO Automation</title>
        <meta name="description" content="Mentions légales de HGO Automation — Hugo Fonseca, consultant en automatisation et intelligence artificielle. SIRET 908 443 120 00021." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://hgoautomation.fr/mentions-legales" />
      </Helmet>

      <SharedNav />

      <section className="pt-40 pb-24 px-8 md:px-24">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan/60 border border-cyan/20 px-4 py-1.5 rounded-full mb-8 inline-block">Informations légales</span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            Mentions <span className="text-cyan">Légales.</span>
          </h1>
          <p className="text-ghost/40 text-xs mb-12 font-mono border-b border-ghost/10 pb-6 italic">
            Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN)
          </p>

          <div className="space-y-10 text-sm font-light text-ghost/70 leading-relaxed">
            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Box className="w-4 h-4 text-cyan" /> Éditeur du site
              </h2>
              <div className="bg-void/40 p-6 rounded-2xl border border-ghost/8">
                <p className="font-bold text-ghost mb-1">Hugo Fonseca</p>
                <p>Nom commercial : HGO Automation</p>
                <p>Entrepreneur individuel (Auto-entrepreneur)</p>
                <p>94250 Gentilly, France</p>
                <p className="mt-2">SIRET : <strong className="text-ghost">908 443 120 00021</strong></p>
                <p>Email : <a href="mailto:hgosuportservices@gmail.com" className="text-cyan underline hover:text-white transition-colors">hgosuportservices@gmail.com</a></p>
                <p className="text-xs mt-3 opacity-60 italic">Non assujetti à la TVA — Article 293B du CGI</p>
              </div>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan" /> Directeur de la publication
              </h2>
              <p>Hugo Fonseca</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan" /> Hébergement
              </h2>
              <p><strong className="text-ghost">Netlify, Inc.</strong><br />512 2nd Street, Suite 200, San Francisco, CA 94107, USA</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan" /> Propriété intellectuelle
              </h2>
              <p>L'ensemble du contenu de ce site (textes, images, code, logotypes, visuels) est la propriété exclusive de Hugo Fonseca — HGO Automation. Toute reproduction ou distribution est interdite sans autorisation écrite préalable.</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan" /> Données personnelles & RGPD
              </h2>
              <p>Le site hgoautomation.fr collecte des données personnelles (nom, email, téléphone) via les formulaires de contact pour répondre à vos demandes commerciales. Ces données sont traitées par Hugo Fonseca et ne sont revendues à aucun tiers.</p>
              <p className="mt-3">Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement EU 2016/679), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données, sur simple demande à l'adresse email ci-dessus.</p>
              <p className="mt-3 text-xs opacity-60 italic">Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact.</p>
            </section>

            <section>
              <h2 className="text-ghost text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Box className="w-4 h-4 text-cyan" /> Cookies
              </h2>
              <p>Ce site utilise Google Analytics (GA4) pour mesurer l'audience de manière anonymisée. Aucun cookie de ciblage publicitaire n'est déposé. Vous pouvez refuser le suivi via les paramètres de votre navigateur.</p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-ghost/10 flex gap-6 text-xs font-mono opacity-40">
            <Link to="/" className="hover:text-cyan hover:opacity-100 transition-all">← Accueil</Link>
            <Link to="/cgv" className="hover:text-cyan hover:opacity-100 transition-all">CGV →</Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-8 md:px-24 border-t border-ghost/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-mono opacity-30 uppercase tracking-widest">© 2026 Hugo Fonseca — HGO Automation. SIRET 908 443 120 00021</p>
        </div>
      </footer>
    </main>
  );
}
