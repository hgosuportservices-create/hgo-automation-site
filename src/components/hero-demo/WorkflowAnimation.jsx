import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Brain, Send, UserPlus, CalendarCheck, Sparkles } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import FloatingCard from './FloatingCard';
import ConnectionLines from './ConnectionLines';
import Dashboard from './Dashboard';

const CLIENT_MSG_1 = "Bonjour 👋\nJe souhaite obtenir un devis.";
const AGENT_REPLY = "Bonjour 👋 Merci pour votre message.\nPouvez-vous me communiquer :\n• votre ville\n• votre téléphone\n• votre disponibilité ?";
const CLIENT_MSG_2 = "Paris\nDisponible mardi\n06 XX XX XX XX";

// Durée (ms) de chaque étape de la démonstration.
const STEP_DURATIONS = [1400, 1300, 1100, 1300, 1500, 1400, 1200, 1200, 1800, 2200];
const RESET_PAUSE = 900;

function useWorkflowStep(stepCount, durations, reduceMotion) {
  const [step, setStep] = useState(reduceMotion ? stepCount - 1 : 0);
  const [loopKey, setLoopKey] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const advance = (current) => {
      const duration = durations[current] ?? 1200;
      timeoutRef.current = setTimeout(() => {
        const next = current + 1;
        if (next < stepCount) {
          setStep(next);
          advance(next);
        } else {
          timeoutRef.current = setTimeout(() => {
            setStep(0);
            setLoopKey((k) => k + 1);
            advance(0);
          }, RESET_PAUSE);
        }
      }, duration);
    };

    advance(0);
    return () => clearTimeout(timeoutRef.current);
  }, [reduceMotion, stepCount, durations]);

  return { step, loopKey };
}

export default function WorkflowAnimation() {
  const reduceMotion = useReducedMotion();
  const { step, loopKey } = useWorkflowStep(STEP_DURATIONS.length, STEP_DURATIONS, reduceMotion);

  const messages = [];
  if (step >= 0) messages.push({ id: 'c1', from: 'client', text: CLIENT_MSG_1 });
  if (step >= 4) messages.push({ id: 'a1', from: 'agent', text: AGENT_REPLY });
  if (step >= 5) messages.push({ id: 'c2', from: 'client', text: CLIENT_MSG_2 });

  const showTyping = step === 1;
  const agentCardState = step >= 3 ? 'qualified' : step >= 2 ? 'detected' : step >= 1 ? 'analyzing' : null;

  return (
    <div className="relative flex flex-col items-center gap-6">
      {/* Badge statut */}
      <div className="self-end mr-2 mb-1">
        <div className="inline-flex items-center gap-2 bg-void/80 backdrop-blur-sm border border-green-400/30 rounded-full px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-ghost/70">Agent IA actif</span>
        </div>
      </div>

      <div className="relative flex items-start gap-10">
        <div className="animate-float-soft">
          <PhoneMockup messages={messages} showTyping={showTyping} />
        </div>

        <div className="relative hidden lg:flex flex-col gap-3 w-56 pt-6">
          <ConnectionLines slotCount={5} loopKey={loopKey} />

          <div className="h-[76px]">
            <FloatingCard
              visible={step >= 1}
              icon={<MessageCircle className="w-4 h-4 text-green-400" />}
              iconBg="bg-green-500/10 border border-green-400/25"
              title="Nouveau message"
            >
              WhatsApp · reçu
            </FloatingCard>
          </div>

          <div className="h-[76px]">
            <FloatingCard
              visible={step >= 1}
              highlighted
              icon={<Brain className="w-4 h-4 text-cyan" />}
              title="Agent IA"
            >
              {agentCardState === 'qualified' && (
                <span>✓ Qualifié · Budget · Ville détectés</span>
              )}
              {agentCardState === 'detected' && <span>✓ Intention détectée — Devis</span>}
              {agentCardState === 'analyzing' && <span>Analyse du message en cours…</span>}
            </FloatingCard>
          </div>

          <div className="h-[76px]">
            <FloatingCard
              visible={step >= 4}
              icon={<Send className="w-4 h-4 text-cyan" />}
              title="Réponse automatique"
            >
              Message envoyé
            </FloatingCard>
          </div>

          <div className="h-[76px]">
            <FloatingCard
              visible={step >= 6}
              icon={<UserPlus className="w-4 h-4 text-cyan" />}
              title="CRM mis à jour"
            >
              Contact créé · Source WhatsApp
            </FloatingCard>
          </div>

          <div className="h-[76px]">
            <FloatingCard
              visible={step >= 7}
              icon={<CalendarCheck className="w-4 h-4 text-cyan" />}
              title="Rendez-vous créé"
            >
              Mardi · 10h30
            </FloatingCard>
          </div>
        </div>
      </div>

      <div className="h-[130px] w-full max-w-md">
        <Dashboard visible={step >= 8} loopKey={loopKey} className="w-full" />
      </div>

      <div className="h-9 flex items-center justify-center">
        <motion.div
          animate={{ opacity: step >= 9 ? 1 : 0, y: step >= 9 ? 0 : 10, scale: step >= 9 ? 1 : 0.95 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/30 rounded-full px-4 py-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan">Mission terminée — Lead traité automatiquement</span>
        </motion.div>
      </div>
    </div>
  );
}
