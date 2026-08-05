import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';

const CONVERSATION = [
  { id: 1,  from: 'client', text: 'Bonjour, j\'ai besoin d\'un devis pour une pompe à chaleur 🏠' },
  { id: 2,  from: 'agent',  text: 'Bonjour ! Avec plaisir 😊\nQuelle est la surface de votre logement ?' },
  { id: 3,  from: 'client', text: 'Environ 120 m², maison des années 80' },
  { id: 4,  from: 'agent',  text: '✅ Parfait ! Je calcule votre estimation...\n\nBudget estimé : 8 500 – 12 000 €\nÉligible MaPrimeRénov\' : jusqu\'à 4 000 €\n\nUn conseiller vous rappelle quand ?' },
  { id: 5,  from: 'client', text: 'Demain matin si possible' },
  { id: 6,  from: 'agent',  text: '📅 RDV confirmé demain à 9h00\nVous recevrez un SMS de rappel ce soir.\n\nMerci et à demain !' },
];

const DELAYS = [0, 1200, 2400, 3200, 4800, 5600];
const CYCLE = 9000;

function StatusDot({ active }) {
  return (
    <span className="relative flex h-2 w-2">
      {active && (
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      )}
      <span className={`relative inline-flex rounded-full h-2 w-2 ${active ? 'bg-green-400' : 'bg-ghost/30'}`} />
    </span>
  );
}

function MetricPill({ label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center px-4 py-2.5 rounded-2xl border border-cyan/15 bg-cyan/5 backdrop-blur-sm"
    >
      <span className="text-cyan font-bold text-lg leading-none">{value}</span>
      <span className="text-ghost/40 text-[10px] mt-0.5 whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

export default function WhatsAppChat() {
  const [messages, setMessages] = useState([]);
  const [showTyping, setShowTyping] = useState(false);
  const [cycle, setCycle] = useState(0);
  const runIdRef = useRef(0);

  const runConversation = useCallback(() => {
    runIdRef.current += 1;
    const rid = runIdRef.current;
    setMessages([]);
    setShowTyping(false);

    CONVERSATION.forEach((msg, idx) => {
      const delay = DELAYS[idx];

      if (msg.from === 'agent') {
        setTimeout(() => setShowTyping(true), delay - 500);
      }

      setTimeout(() => {
        setShowTyping(false);
        // Use a unique key prefix per run to avoid AnimatePresence key collisions
        setMessages(prev => [...prev, { ...msg, id: `${rid}-${msg.id}` }]);
      }, delay);
    });
  }, []);

  useEffect(() => {
    runConversation();
    const timer = setInterval(() => {
      setCycle(c => c + 1);
    }, CYCLE);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (cycle === 0) return;
    runConversation();
  }, [cycle, runConversation]);

  return (
    <div className="w-full flex flex-col items-center gap-5 select-none">

      {/* Téléphone */}
      <div className="relative">
        {/* Glow ambiant */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-cyan/8 blur-2xl scale-110 -z-10" />

        <PhoneMockup messages={messages} showTyping={showTyping} />

        {/* Badge "Bot actif" */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute -right-4 top-20 flex items-center gap-1.5 bg-void/90 border border-green-400/25 rounded-full px-2.5 py-1.5 backdrop-blur-sm shadow-lg shadow-black/40"
        >
          <StatusDot active />
          <span className="text-[10px] font-semibold text-green-400 whitespace-nowrap">Bot actif 24h/24</span>
        </motion.div>

        {/* Badge réponse auto */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute -left-6 bottom-24 flex items-center gap-1.5 bg-void/90 border border-cyan/20 rounded-full px-2.5 py-1.5 backdrop-blur-sm shadow-lg shadow-black/40"
        >
          <span className="text-cyan text-xs">⚡</span>
          <span className="text-[10px] font-semibold text-ghost/80 whitespace-nowrap">Réponse &lt; 3 s</span>
        </motion.div>
      </div>

      {/* Métriques sous le téléphone */}
      <div className="flex gap-3">
        <MetricPill label="Leads qualifiés" value="×3"  delay={0.3} />
        <MetricPill label="Taux de rép." value="98 %"  delay={0.5} />
        <MetricPill label="Disponible" value="24/7"    delay={0.7} />
      </div>
    </div>
  );
}
