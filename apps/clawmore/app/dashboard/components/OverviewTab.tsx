import React from 'react';
import { Layers, Zap, Activity, Shield } from 'lucide-react';

interface OverviewTabProps {
  status: any;
}

export default function OverviewTab({ status }: OverviewTabProps) {
  return (
    <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h2 className="text-2xl font-black italic mb-10 tracking-tight text-white uppercase flex items-center gap-3">
        <Layers className="w-5 h-5 text-cyber-blue" />
        Account <span className="text-cyber-blue">Overview</span>
      </h2>

      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AWS Compute Usage Card */}
          <div className="bg-black/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Layers className="w-24 h-24" />
            </div>
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6">
              AWS Usage This Month
            </h3>
            <div className="flex items-end gap-3 mb-8">
              <span className="text-4xl font-black text-white italic">
                ${(status.awsSpendCents / 100).toFixed(2)}
              </span>
              <span className="text-zinc-500 text-sm mb-1 font-mono uppercase tracking-tighter">
                of ${(status.awsInclusionCents / 100).toFixed(2)} included
              </span>
            </div>
            <div className="space-y-4">
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-cyber-blue h-full shadow-[0_0_10px_rgba(0,224,255,0.5)] transition-all duration-1000"
                  style={{
                    width: `${Math.min((status.awsSpendCents / status.awsInclusionCents) * 100, 100)}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-zinc-400 uppercase tracking-tighter">
                  Budget Used
                </span>
                <span className="text-cyber-blue font-bold">
                  {(
                    (status.awsSpendCents / status.awsInclusionCents) *
                    100
                  ).toFixed(1)}
                  %
                </span>
              </div>
            </div>
          </div>

          {/* AI Credits Card */}
          <div className="bg-black/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap className="w-24 h-24 text-amber-500" />
            </div>
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6">
              AI Auto-Fix Credits
            </h3>
            <div className="flex items-end gap-3 mb-8">
              <span className="text-4xl font-black text-amber-500 italic">
                ${(status.aiTokenBalanceCents / 100).toFixed(2)}
              </span>
              <span className="text-zinc-500 text-sm mb-1 font-mono uppercase tracking-tighter">
                remaining
              </span>
            </div>
            <div className="space-y-4">
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all duration-1000"
                  style={{
                    width: `${Math.min((status.aiTokenBalanceCents / 1000) * 100, 100)}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-zinc-400 uppercase tracking-tighter">
                  Credit Balance
                </span>
                <span className="text-amber-500 font-bold">
                  {status.aiTokenBalanceCents <= status.aiRefillThresholdCents
                    ? 'LOW - Consider topping up'
                    : 'Good'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6">
            Quick Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: 'Auto-Fixes Applied',
                value: status.mutationCount,
                icon: Activity,
                color: 'text-cyber-purple',
              },
              {
                label: 'Active Repos',
                value: status.activeRepos ?? 0,
                icon: Layers,
                color: 'text-cyber-blue',
              },
              {
                label: 'Health Score',
                value:
                  status.mutationCount > 0
                    ? `${Math.round((status.recentMutations.filter((m: any) => m.mutationStatus === 'SUCCESS').length / status.mutationCount) * 100)}%`
                    : '—',
                icon: Shield,
                color: 'text-emerald-500',
              },
              {
                label: 'Plan',
                value: status.planStatus || 'FREE',
                icon: Zap,
                color: 'text-amber-500',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black/40 border border-white/5 p-6 rounded-2xl flex flex-col gap-3 hover:border-white/10 transition-colors"
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest block">
                    {item.label}
                  </span>
                  <span className="text-lg font-black text-white italic">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-xl font-bold mb-8 flex items-center gap-3 italic">
            <Activity className="w-5 h-5 text-cyber-blue" />
            Recent Fixes
          </h2>

          <div className="space-y-4">
            {status.recentMutations?.length > 0 ? (
              status.recentMutations.map((mutation: any, i: number) => (
                <div
                  key={mutation.mutationId || i}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-cyber-blue/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-white/5 group-hover:bg-zinc-700 transition-colors">
                    <Zap
                      className={`w-5 h-5 ${mutation.mutationStatus === 'FAILURE' ? 'text-rose-500' : 'text-amber-500'}`}
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-black italic text-white uppercase tracking-tight">
                      {mutation.mutationType || 'Infrastructure Mutation'}
                    </p>
                    <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mt-1">
                      {mutation.mutationStatus === 'SUCCESS'
                        ? 'Successful Commit'
                        : 'Mutation Failed'}{' '}
                      • {new Date(mutation.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-xs font-black italic uppercase ${mutation.mutationStatus === 'FAILURE' ? 'text-rose-500' : 'text-emerald-500'}`}
                    >
                      {mutation.mutationStatus === 'FAILURE'
                        ? 'RETRY'
                        : '+1 SCR'}
                    </p>
                    <p className="text-[8px] text-zinc-700 font-mono tracking-tighter mt-1 group-hover:text-zinc-500 transition-colors">
                      ID: {mutation.mutationId?.slice(0, 8).toUpperCase()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center bg-black/20 border border-white/5 border-dashed rounded-2xl">
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  No fixes applied yet
                </p>
                <p className="text-[9px] text-zinc-700 mt-2 font-mono">
                  Fixes will appear here after your first scan
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
