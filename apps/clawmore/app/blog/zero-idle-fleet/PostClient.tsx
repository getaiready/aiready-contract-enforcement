'use client';

import { Zap, ChevronRight } from 'lucide-react';
import BlogLayout from '../_components/BlogLayout';
import SystemFlow from '../../../components/SystemFlow';

const IDLE_NODES = [
  {
    id: 'legacy',
    data: { label: 'Legacy VPS ($0.05/min)', type: 'agent' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'idle-waste',
    data: { label: 'IDLE WASTE ($72/mo)', type: 'event' },
    position: { x: 250, y: 0 },
  },
  {
    id: 'serverless',
    data: { label: 'ServerlessClaw ($0.00/min)', type: 'bus' },
    position: { x: 0, y: 100 },
  },
  {
    id: 'execution',
    data: { label: 'UTILITY BILLING ($0.01)', type: 'event' },
    position: { x: 250, y: 100 },
  },
];

const IDLE_EDGES = [
  {
    id: 'e1',
    source: 'legacy',
    target: 'idle-waste',
    label: 'Always On',
    style: { stroke: '#ef4444' },
  },
  {
    id: 'e2',
    source: 'serverless',
    target: 'execution',
    label: 'Event Triggered',
    animated: true,
  },
];

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'Zero-Idle Fleet: Scaling to Infinity for $0.00',
        description:
          'How to run a fleet of 100 on-call agents for a week for less than the price of a coffee by leveraging the physics of serverless.',
        date: '2026-03-27',
        image: '/blog-assets/zero-idle-fleet.png',
        slug: 'zero-idle-fleet',
      }}
      header={{
        category: 'MUTATION_LOG_002',
        hash: 'zeroidle',
        readTime: '5 MIN READ',
        title: (
          <>
            Zero-Idle <br />
            <span className="text-cyber-purple">Fleet Scaling</span>
          </>
        ),
        subtitle: 'Zero Waste Economics',
        description:
          "Stop paying for air. Learn how to architect an agentic workforce that only exists when it's working.",
        image: '/blog-assets/zero-idle-fleet.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        { label: 'ZERO-IDLE FLEET', href: '/blog/zero-idle-fleet' },
      ]}
    >
      <section>
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">01</span>
          The Idle Debt Crisis
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Traditional AI platforms run their agents on permanent servers. This
          is fine if your agent is busy 24/7. But for most business
          tasks—audits, CRM updates, code reviews—the agent is idle 99% of the
          time.
        </p>
        <p className="text-zinc-200 leading-relaxed text-lg mt-6">
          In the Eclawnomy, we call this <strong>Idle Debt</strong>. It&apos;s
          the hidden friction that makes agentic scaling impossible for most
          firms.
        </p>
      </section>

      <SystemFlow nodes={IDLE_NODES} edges={IDLE_EDGES} height="300px" />

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">02</span>
          Scaling to Infinity for $0.00
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          By leveraging **ServerlessClaw**, we decouple the existence of the
          agent from its runtime. When a trigger arrives (a GitHub webhook, a
          Stripe event, a calendar invite), the infrastructure materializes,
          performs the task, and vanishes.
        </p>
        <div className="mt-8 p-6 bg-cyber-purple/5 border border-cyber-purple/20 rounded-sm">
          <div className="flex items-center gap-3 mb-4 text-cyber-purple">
            <Zap className="w-5 h-5" />
            <span className="font-mono text-xs uppercase tracking-widest">
              Physics_of_Serverless
            </span>
          </div>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-cyber-purple" />
              <span>
                <strong>Event-Driven:</strong> Agents only incur cost during
                compute.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-cyber-purple" />
              <span>
                <strong>Infinite Parallelism:</strong> Run 1 or 1,000 agents
                simultaneously without resource contention.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-1 text-cyber-purple" />
              <span>
                <strong>Wait-State Economics:</strong> 10,000 agents waiting for
                a signal cost exactly $0.00.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">03</span>
          Real-World ROI
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Last month, a pilot client used our Zero-Idle architecture to run a
          nightly audit Across 45 different client repositories. Total cost for
          the month? <strong>$4.12</strong>. On a traditional VPS setup, the
          same coverage would have exceeded $250.
        </p>
      </section>
    </BlogLayout>
  );
}
