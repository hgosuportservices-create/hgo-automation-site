import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SharedNav from '../components/SharedNav';

const articles = [
  {
    num: '1',
    title: 'Identification',
    content: (
      <div className="bg-void/40 p-4 rounded-xl border border-ghost/8">
        <p><strong className="text-ghost">Hugo Fonseca</strong>, exerçant sous le nom commercial <strong className="text-ghost">HGO Automation</strong></p>
        <p>Siège social : 94250 Gentilly, France</p>
        <p>SIRET : 908 443 120 00021</p>
        <p>Email : hgosuportservices@gmail.com</p>
        <p className="text-xs mt-2 opacity-60 italic">Non assujetti à la TVA — Article 293B du CGI</p>
      </div>
    ),
  },
  {
    num: '2',
    title: 'Objet',
    content: <p>Les présentes Conditions Générales de Vente régissent les prestations proposées par HGO Automation : automatisation de processus (n8n, Make), intelligence artificielle, chatbots, agents IA, création de CRM, développement d'applications no-code et consulting en transformation digitale.</p>,
  },
  {
    num: '3',
    title: 'Devis et commande',
    content: <p>Tout devis est gratuit, établi après un appel découverte de 30 minutes, et valable 30 jours à compter de sa date d'émission. La commande est définitivement validée par la signature du devis et le versement de l'acompte défini à l'article 4.</p>,
  },
  {
    num: '4',
    title: 'Tarifs et paiement',
    content: (
      <div className="space-y-2">
        <p>HGO Automation est non assujetti à la TVA (franchise de base — Article 293B du CGI). Tous les prix sont indiqués en euros TTC.</p>
        <p className="mt-2"><strong className="text-ghost">Prestations à la mission :</strong> acompte de 50% à la commande, solde à la livraison ou à la mise en production.</p>
        <p><strong className="text-ghost">Abonnements de maintenance :</strong> facturation mensuelle, sans engagement, résiliables avec un préavis de 30 jours.</p>
        <p className="mt-2">Tout retard de paiement entraîne des pénalités au taux légal en vigueur, ainsi qu'une indemnité forfaitaire de recouvrement de 40€.</p>
      </div>
    ),
  },
  {
    num: '5',
    title: 'Délais de livraison',
    content: (
      <div className="space-y-1">
        <p>Les délais indicatifs communiqués à titre d'information sont :</p>
        <ul className="list-none mt-2 space-y-1 pl-4 border-l border-cyan/20">
          <li>Workflow simple / confirmation email : 2-4 jours ouvrés</li>
          <li>Chatbot WhatsApp ou Telegram : 3-5 jours ouvrés</li>
          <li>CRM sur mesure Notion/Airtable : 5-10 jours ouvrés</li>
          <li>Agent IA : 10-15 jours ouvrés</li>
          <li>Application ou dashboard no-code : 5-10 jours ouvrés</li>
        </ul>
        <p className="mt-2 text-xs opacity-60 italic">Ces délais débutent à compter de la réception de l'acompte et de toutes les informations nécessaires au démarrage du projet.</p>
      </div>
    ),
  },
  {
    num: '6',
    title: 'Propriété intellectuelle',
    content: <p>À la réception du solde, le client acquiert les droits d'utilisation des livrables produits dans le cadre de sa prestation. HGO Automation conserve le droit de mentionner la collaboration à des fins de référence commerciale, sauf opposition écrite du client.</p>,
  },
  {
    num: '7',
    title: 'Confidentialité',
    content: <p>HGO Automation s'engage à maintenir la stricte confidentialité de toutes les informations communiquées par le client dans le cadre de la prestation. Un accord de non-divulgation (NDA) peut être signé sur demande du client, sans frais supplémentaires.</p>,
  },
  {
    num: '8',
    title: 'Garantie et satisfaction',
    content: (
      <div className="space-y-2">
        <p><strong className="text-ghost">Garantie 30 jours :</strong> toute prestation inclut 30 jours de support post-livraison couvrant les corrections de bugs et ajustements mineurs.</p>
        <p><strong className="text-ghost">Garantie satisfaction :</strong> si les livrables ne correspondent pas aux spécifications définies dans le devis signé, HGO Automation s'engage à les corriger sans facturation supplémentaire, dans un délai raisonnable.</p>
      </div>
    ),
  },
  {
    num: '9',
    title: 'Responsabilité',
    content: <p>HGO Automation ne saurait être tenu responsable des dommages indirects pouvant résulter de l'utilisation des livrables. La responsabilité de HGO Automation est limitée au montant de la prestation concernée. Le client est seul responsable de la conformité de l'utilisation des automatisations déployées avec la législation applicable.</p>,
  },
  {
    num: '10',
    title: 'Résiliation',
    content: <p>Les abonnements de maintenance sont résiliables sans pénalité par simple email avec un préavis de 30 jours. Pour les prestations à la mission, en cas de résiliation avant livraison par le client, l'acompte versé reste acquis à HGO Automation en compensation des travaux engagés.</p>,
  },
  {
    num: '11',
    title: 'Droit applicable et litiges',
    content: <p>Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut d'accord, le tribunal compétent sera celui du ressort du siège social de HGO Automation (Créteil).</p>,
  },
];

export default function CGV() {
  return (
    <main className="min-h-screen text-ghost font-sans bg-void">
      <Helmet>
        <title>Conditions Générales de Vente — HGO Automation</title>
        <meta name="description" content="Conditions Générales de Vente de HGO Automation — prestations d'automatisation, agents IA, CRM sur mesure. Hugo Fonseca, consultant indépendant." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://hgoautomation.fr/cgv" />
      </Helmet>

      <SharedNav />

      <section className="pt-40 pb-24 px-8 md:px-24">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan/60 border border-cyan/20 px-4 py-1.5 rounded-full mb-8 inline-block">Contractuel</span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            Conditions Générales<br />de <span className="text-cyan">Vente.</span>
          </h1>
          <p className="text-ghost/40 text-xs mb-12 font-mono border-b border-ghost/10 pb-6 italic">
            Dernière mise à jour : mars 2026 · Applicable à toute commande passée auprès de HGO Automation
          </p>

          <div className="space-y-8">
            {articles.map((article) => (
              <section key={article.num} className="border border-ghost/8 rounded-2xl p-6 hover:border-cyan/20 transition-colors">
                <h2 className="text-ghost text-base font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
                  <span className="text-cyan font-mono text-sm border border-cyan/20 bg-cyan/5 px-2 py-0.5 rounded">Art. {article.num}</span>
                  {article.title}
                </h2>
                <div className="text-ghost/60 text-sm leading-relaxed">{article.content}</div>
              </section>
            ))}
          </div>

          <div className="mt-12 p-4 rounded-2xl bg-void/40 border border-ghost/8 text-xs text-ghost/40 italic">
            Pour toute question relative à ces CGV : <a href="mailto:hgosuportservices@gmail.com" className="text-cyan hover:text-white transition-colors">hgosuportservices@gmail.com</a>
          </div>

          <div className="mt-8 pt-8 border-t border-ghost/10 flex gap-6 text-xs font-mono opacity-40">
            <Link to="/" className="hover:text-cyan hover:opacity-100 transition-all">← Accueil</Link>
            <Link to="/mentions-legales" className="hover:text-cyan hover:opacity-100 transition-all">Mentions légales →</Link>
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
