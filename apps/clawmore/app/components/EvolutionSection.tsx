'use client';

import { Terminal, Zap } from 'lucide-react';

interface EvolutionSectionProps {
  dict: any;
}

export default function EvolutionSection({ dict }: EvolutionSectionProps) {
  return (
    <section
      className="py-16 sm:py-24 bg-black/40 border-y border-white/5 relative overflow-hidden scroll-mt-24 sm:scroll-mt-28"
      id="evolution"
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <div className="text-cyber-blue font-mono text-[10px] uppercase tracking-[0.4em] mb-4">
              {dict.evolution.visualizer}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 tracking-tighter italic">
              {dict.evolution.title}
            </h2>
            <p className="text-zinc-400 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg font-light">
              {dict.evolution.desc}
            </p>

            <div className="space-y-4">
              {dict.evolution.steps.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex gap-4 sm:gap-6 p-4 sm:p-5 rounded-sm border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
                >
                  <div className="text-zinc-600 font-mono text-sm group-hover:text-cyber-blue transition-colors">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">{item.label}</div>
                    <div className="text-xs text-zinc-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative w-full aspect-square max-w-[550px] group">
            <div className="absolute inset-0 bg-cyber-blue/10 rounded-full blur-[100px] animate-pulse group-hover:bg-cyber-blue/20 transition-all" />
            <div className="relative h-full w-full rounded-sm border border-white/10 bg-[#060606] p-4 sm:p-8 font-mono text-[10px] sm:text-[11px] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyber-blue" />
                  <span className="text-white font-bold tracking-tighter uppercase">
                    {dict.evolution.logTitle}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-cyber-blue/50" />
                </div>
              </div>
              <div className="space-y-3 leading-relaxed">
                <div className="text-zinc-600 font-bold">
                  [01:14:16]{' '}
                  <span className="text-cyber-blue uppercase">
                    Node_Status:
                  </span>{' '}
                  {dict.evolution.logStatus}
                </div>
                <div className="text-zinc-600 font-bold">
                  [01:14:17]{' '}
                  <span className="text-purple-400 uppercase">Process:</span>{' '}
                  Scoped Gap Analysis initiated...
                </div>
                <div className="pl-4 text-zinc-500 italic">
                  {'>>'} {dict.evolution.logIdentify}
                </div>
                <div className="text-zinc-600 font-bold">
                  [01:14:22]{' '}
                  <span className="text-yellow-400 uppercase">Action:</span>{' '}
                  Synthesizing patch v4.2.9
                </div>
                <div className="text-zinc-600 font-bold">
                  [01:14:35] <span className="text-white uppercase">Ops:</span>{' '}
                  Mutation in progress (infra/limits.ts)
                </div>
                <div className="text-zinc-600 font-bold">
                  [01:15:02]{' '}
                  <span className="text-cyber-blue uppercase">Sync:</span>{' '}
                  Committing success to origin/main
                </div>

                <div className="mt-8 p-4 bg-cyber-blue/5 rounded-sm border border-cyber-blue/20 text-cyber-blue text-[10px] relative overflow-hidden group-hover:border-cyber-blue/40 transition-all">
                  <div className="absolute top-0 right-0 p-1 opacity-20">
                    <Zap size={40} />
                  </div>
                  <div className="font-black mb-1 text-white underline decoration-cyber-blue decoration-2 underline-offset-4">
                    {dict.evolution.mutVerified}
                  </div>
                  <div>{dict.evolution.mutAdded}</div>
                  <div className="text-[8px] opacity-60 mt-2">
                    HASH: 5086da9f3c6d8e2d494195...
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
