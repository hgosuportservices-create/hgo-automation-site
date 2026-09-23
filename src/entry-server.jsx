import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { ContactProvider } from './context/ContactContext.jsx';
import App from './App.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';
import CGV from './pages/CGV.jsx';
import NotFound from './pages/NotFound.jsx';
import AutomatisationWhatsAppTelegram from './pages/services/AutomatisationWhatsAppTelegram.jsx';
import AgentIA from './pages/services/AgentIA.jsx';
import AutomatisationN8n from './pages/services/AutomatisationN8n.jsx';
import AutomatisationEntreprise from './pages/services/AutomatisationEntreprise.jsx';
import AutomatisationCRM from './pages/services/AutomatisationCRM.jsx';
import CreationApplications from './pages/services/CreationApplications.jsx';
import CasClientGroupeRousso from './pages/CasClientGroupeRousso.jsx';
import CasClientLesInstallateurs from './pages/CasClientLesInstallateurs.jsx';
import SectorCVC from './pages/sectors/SectorCVC.jsx';
import SectorPlomberie from './pages/sectors/SectorPlomberie.jsx';
import SectorElectricite from './pages/sectors/SectorElectricite.jsx';
import SectorRenovation from './pages/sectors/SectorRenovation.jsx';
import Formation from './pages/Formation.jsx';
import APropos from './pages/APropos.jsx';

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <ContactProvider>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cas-client/groupe-rousso" element={<CasClientGroupeRousso />} />
            <Route path="/cas-client/lesinstallateurs" element={<CasClientLesInstallateurs />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="/services/automatisation-whatsapp-telegram" element={<AutomatisationWhatsAppTelegram />} />
            <Route path="/services/agent-ia" element={<AgentIA />} />
            <Route path="/services/automatisation-n8n" element={<AutomatisationN8n />} />
            <Route path="/services/automatisation-entreprise" element={<AutomatisationEntreprise />} />
            <Route path="/services/automatisation-crm" element={<AutomatisationCRM />} />
            <Route path="/services/creation-applications-dashboards" element={<CreationApplications />} />
            <Route path="/secteurs/automatisation-cvc-climatisation-chauffage" element={<SectorCVC />} />
            <Route path="/secteurs/automatisation-plombier-chauffagiste" element={<SectorPlomberie />} />
            <Route path="/secteurs/automatisation-electricien" element={<SectorElectricite />} />
            <Route path="/secteurs/automatisation-renovation-batiment" element={<SectorRenovation />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StaticRouter>
      </ContactProvider>
    </HelmetProvider>
  );
  return { html, helmet: helmetContext.helmet };
}
