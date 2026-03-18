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

export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <ContactProvider>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="/services/automatisation-whatsapp-telegram" element={<AutomatisationWhatsAppTelegram />} />
            <Route path="/services/agent-ia" element={<AgentIA />} />
            <Route path="/services/automatisation-n8n" element={<AutomatisationN8n />} />
            <Route path="/services/automatisation-entreprise" element={<AutomatisationEntreprise />} />
            <Route path="/services/automatisation-crm" element={<AutomatisationCRM />} />
            <Route path="/services/creation-applications-dashboards" element={<CreationApplications />} />
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
