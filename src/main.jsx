import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ContactProvider } from './context/ContactContext.jsx'
import ContactModal from './components/ContactModal.jsx'
import './index.css'
import App from './App.jsx'

const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'))
const ArticlePage = lazy(() => import('./pages/ArticlePage.jsx'))
const MentionsLegales = lazy(() => import('./pages/MentionsLegales.jsx'))
const CGV = lazy(() => import('./pages/CGV.jsx'))
const AutomatisationWhatsAppTelegram = lazy(() => import('./pages/services/AutomatisationWhatsAppTelegram.jsx'))
const AgentIA = lazy(() => import('./pages/services/AgentIA.jsx'))
const AutomatisationN8n = lazy(() => import('./pages/services/AutomatisationN8n.jsx'))
const AutomatisationEntreprise = lazy(() => import('./pages/services/AutomatisationEntreprise.jsx'))
const AutomatisationCRM = lazy(() => import('./pages/services/AutomatisationCRM.jsx'))
const CreationApplications = lazy(() => import('./pages/services/CreationApplications.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ContactProvider>
        <BrowserRouter>
          <ContactModal />
          <Suspense fallback={<div className="min-h-screen bg-void" />}>
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
          </Suspense>
        </BrowserRouter>
      </ContactProvider>
    </HelmetProvider>
  </StrictMode>,
)
