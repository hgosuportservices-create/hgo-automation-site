import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, Video, Camera, Mic, Plus } from 'lucide-react';

function TypingDots() {
  return (
    <div className="flex items-center gap-1 bg-void/60 border border-ghost/10 rounded-2xl rounded-bl-sm px-3 py-2.5 w-fit">
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-cyan/70"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

/**
 * iPhone réaliste avec une conversation type WhatsApp Business.
 * `messages`: [{ id, from: 'client' | 'agent', text }]
 */
export default function PhoneMockup({ messages, showTyping, className = '' }) {
  return (
    <div className={`relative w-[260px] rounded-[2.5rem] border-[6px] border-ghost/15 bg-void shadow-2xl shadow-cyan/10 overflow-hidden ${className}`}>
      {/* Encoche */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-ghost/15 rounded-b-2xl z-20" />

      {/* Barre de statut */}
      <div className="flex items-center justify-between px-6 pt-2.5 pb-1 text-[10px] font-semibold text-ghost/80">
        <span>9:41</span>
        <span className="w-16" />
      </div>

      {/* Header conversation */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-ghost/8 bg-graphite/40">
        <ChevronLeft className="w-4 h-4 text-ghost/50" />
        <div className="w-8 h-8 rounded-full bg-green-500/15 border border-green-400/30 flex items-center justify-center text-sm">
          🌿
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-ghost truncate">Prospect</p>
          <p className="text-[10px] text-green-400/80">En ligne</p>
        </div>
        <Video className="w-4 h-4 text-ghost/40" />
      </div>

      {/* Messages */}
      <div className="relative flex flex-col justify-end gap-2 px-3 py-3 h-[300px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,209,255,0.04),transparent_60%)]">
        <div className="flex flex-col gap-2 justify-end h-full overflow-hidden">
          <AnimatePresence initial={false}>
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`max-w-[80%] px-3 py-2 text-[11px] leading-relaxed rounded-2xl whitespace-pre-line ${
                  m.from === 'agent'
                    ? 'self-end bg-cyan text-void rounded-br-sm'
                    : 'self-start bg-ghost/10 text-ghost/90 rounded-bl-sm'
                }`}
              >
                {m.text}
              </motion.div>
            ))}
            {showTyping && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="self-start"
              >
                <TypingDots />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Barre de saisie */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-t border-ghost/8 bg-graphite/40">
        <Plus className="w-4 h-4 text-ghost/40 flex-shrink-0" />
        <div className="flex-1 h-7 rounded-full bg-void/60 border border-ghost/10" />
        <Camera className="w-4 h-4 text-ghost/40 flex-shrink-0" />
        <Mic className="w-4 h-4 text-ghost/40 flex-shrink-0" />
      </div>
    </div>
  );
}
