import React from 'react';
import { Zap } from 'lucide-react';

interface SettingsTabProps {
  isCoevolutionEnabled: boolean;
  onCoevolutionToggle: (enabled: boolean) => void;
}

export default function SettingsTab({
  isCoevolutionEnabled,
  onCoevolutionToggle,
}: SettingsTabProps) {
  return (
    <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="text-2xl font-black italic mb-10 tracking-tight text-white uppercase">
        AI Credits & <span className="text-cyber-blue">Settings</span>
      </h2>

      <div className="space-y-12">
        <div>
          <h3 className="text-sm font-black text-amber-500 mb-3 flex items-center gap-2 uppercase tracking-tight">
            <Zap className="w-4 h-4" /> Save on AI Credits
          </h3>
          <p className="text-xs text-zinc-500 mb-8 leading-relaxed font-mono italic max-w-2xl">
            Share anonymous code patterns to earn discounts on AI credits. We
            only learn from code structure, never your actual code or sensitive
            data.
          </p>

          <div className="bg-black/60 p-8 rounded-3xl border border-white/5 space-y-8 shadow-2xl">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-sm font-black italic text-white uppercase tracking-tight">
                  Enable Pattern Sharing
                </p>
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">
                  Get discounts by sharing anonymous code patterns
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer scale-110">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isCoevolutionEnabled}
                  onChange={(e) => onCoevolutionToggle(e.target.checked)}
                />
                <div className="w-12 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500 shadow-inner"></div>
              </label>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-2">
                  Current Status
                </p>
                <p
                  className={`text-xs font-black italic ${isCoevolutionEnabled ? 'text-emerald-500 uppercase' : 'text-amber-500 uppercase'}`}
                >
                  {isCoevolutionEnabled
                    ? 'Pattern sharing enabled • You get credit discounts'
                    : 'Pattern sharing disabled • Standard pricing applies'}
                </p>
              </div>
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest self-start ${
                  isCoevolutionEnabled
                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                    : 'bg-amber-500/10 border border-amber-500/20 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.1)]'
                }`}
              >
                {isCoevolutionEnabled ? 'Discounts Active' : 'No Discounts'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
