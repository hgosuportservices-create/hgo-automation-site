/**
 * prerender.js — Génère du HTML statique pour chaque route.
 * Exécuté après `vite build` et `vite build --ssr`.
 * Netlify sert les fichiers statiques en priorité sur le redirect /* → /index.html.
 * → Google et les crawlers voient du vrai contenu HTML sans attendre React.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * react-helmet-async v3 + React 19 renderToString injecte les <title>/<meta>/<link>
 * inline dans le rendu HTML. Cette fonction les extrait et les sépare du contenu corps.
 */
function extractHeadTags(html) {
  const HEAD_TAGS = new Set(['title', 'meta', 'link', 'script', 'noscript', 'base', 'style']);
  let pos = 0;
  let headTags = '';

  while (pos < html.length) {
    // Ignorer les espaces
    const wsStart = pos;
    while (pos < html.length && (html[pos] === ' ' || html[pos] === '\n' || html[pos] === '\r')) pos++;

    if (pos >= html.length || html[pos] !== '<') {
      pos = wsStart; // rembobiner
      break;
    }

    // Lire le nom du tag
    const nameMatch = html.slice(pos + 1).match(/^([a-zA-Z][a-zA-Z0-9]*)/);
    if (!nameMatch) break;
    const tagName = nameMatch[1].toLowerCase();
    if (!HEAD_TAGS.has(tagName)) break;

    // Trouver la fin du tag
    let end;
    if (tagName === 'title') {
      const closeIdx = html.indexOf('</title>', pos);
      end = closeIdx === -1 ? html.indexOf('>', pos) + 1 : closeIdx + '</title>'.length;
    } else {
      end = html.indexOf('>', pos) + 1;
    }
    if (end <= pos) break;

    headTags += html.slice(pos, end);
    pos = end;
  }

  return { headTags, bodyHtml: html.slice(pos) };
}

const ROUTES = [
  '/',
  '/blog',
  '/blog/make-vs-n8n-2026-lequel-choisir',
  '/blog/automatiser-prospection-commerciale-n8n',
  '/blog/chatbot-whatsapp-pme-guide-complet-2026',
  '/blog/automatiser-emails-confirmation-entreprise-2026',
  '/blog/n8n-vs-zapier-comparatif-2026',
  '/blog/crm-notion-airtable-pme-2026',
  '/blog/agent-ia-service-client-entreprise-2026',
  '/blog/tableau-de-bord-no-code-kpi-entreprise',
  '/blog/automatiser-facturation-devis-pme-2026',
  '/blog/5-workflows-n8n-indispensables-pme-2026',
  '/blog/5-goulots-etranglement-pme-automatisation-2026',
  '/services/automatisation-whatsapp-telegram',
  '/services/agent-ia',
  '/services/automatisation-n8n',
  '/services/automatisation-entreprise',
  '/services/automatisation-crm',
  '/services/creation-applications-dashboards',
  '/mentions-legales',
  '/cgv',
];

async function prerender() {
  const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8');
  const { render } = await import('./dist-ssr/entry-server.js');

  let ok = 0;
  let fail = 0;

  for (const url of ROUTES) {
    try {
      const { html } = render(url);
      let output = template;

      // react-helmet-async v3 + React 19 rend les Helmet tags INLINE au début du HTML.
      // On les extrait pour les déplacer dans le vrai <head>.
      const { headTags, bodyHtml } = extractHeadTags(html);

      if (headTags) {
        // Supprimer le <title> statique du template
        const tStart = output.indexOf('<title');
        const tEnd = output.indexOf('</title>');
        if (tStart !== -1 && tEnd !== -1) {
          output = output.substring(0, tStart) + output.substring(tEnd + '</title>'.length);
        }
        // Supprimer les meta og:*, twitter:*, canonical, description et JSON-LD du template (seront réinjectés)
        output = output
          .replace(/<meta\s+property="og:[^"]*"[^>]*\/?>/gi, '')
          .replace(/<meta\s+name="twitter:[^"]*"[^>]*\/?>/gi, '')
          .replace(/<meta\s+property="twitter:[^"]*"[^>]*\/?>/gi, '')
          .replace(/<meta\s+name="description"[^>]*\/?>/gi, '')
          .replace(/<link\s+rel="canonical"[^>]*\/?>/gi, '')
          .replace(/<script\s+type="application\/ld\+json"[\s\S]*?<\/script>/gi, '');
        // Ajouter data-rh="true" aux tags SSR pour que react-helmet-async client
        // les reconnaisse et les remplace sans créer de doublons à l'hydratation
        const taggedHeadTags = headTags
          .replace(/<meta\s/g, '<meta data-rh="true" ')
          .replace(/<link\s(?!rel="preload")/g, '<link data-rh="true" ')
          .replace(/<title>/g, '<title data-rh="true">');
        // Injecter les tags Helmet dans <head>
        output = output.replace('</head>', `  ${taggedHeadTags}\n</head>`);
      }

      // Injecter le HTML du corps dans #root
      output = output.replace(
        '<div id="root"></div>',
        `<div id="root">${bodyHtml}</div>`
      );

      const outPath =
        url === '/'
          ? resolve(__dirname, 'dist/index.html')
          : resolve(__dirname, `dist${url}/index.html`);

      if (url !== '/') mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, output);
      console.log(`✓ ${url}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${url}: ${err.message}`);
      fail++;
    }
  }

  console.log(`\nPrerender terminé: ${ok} pages OK, ${fail} erreurs`);
  if (fail > 0) process.exit(1);
}

prerender().catch(err => {
  console.error(err);
  process.exit(1);
});
