'use client';

import { DollarSign } from 'lucide-react';
import BlogLayout from '../_components/BlogLayout';
import SystemFlow from '../../../components/SystemFlow';

const COST_NODES = [
  {
    id: 'vps',
    data: { label: '24/7 VPS ($20+/mo)', type: 'agent' },
    position: { x: 0, y: -50 },
  },
  {
    id: 'waste',
    data: { label: '90% IDLE WASTE', type: 'event' },
    position: { x: 200, y: -50 },
  },
  {
    id: 'lambda',
    data: { label: 'LAMBDA GATEWAY', type: 'bus' },
    position: { x: 0, y: 50 },
  },
  {
    id: 'fargate',
    data: { label: 'FARGATE ON-DEMAND', type: 'agent' },
    position: { x: 250, y: 50 },
  },
  {
    id: 'savings',
    data: { label: '$1/mo TARGET', type: 'bus' },
    position: { x: 500, y: 50 },
  },
];

const COST_EDGES = [
  {
    id: 'e1',
    source: 'vps',
    target: 'waste',
    label: 'Idle',
    animated: false,
    style: { stroke: '#ef4444' },
  },
  {
    id: 'e2',
    source: 'lambda',
    target: 'fargate',
    label: 'Spin up',
    animated: true,
  },
  {
    id: 'e3',
    source: 'fargate',
    target: 'savings',
    label: 'Save',
    animated: true,
  },
];

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'The $1/Month AI Agent: Breaking the Hosting Trap',
        description:
          'Breaking the 24/7 hosting trap. How to run a multi-channel AI backbone for the price of a single coffee.',
        date: '2026-03-12',
        image: '/blog-assets/one-dollar-ai-agent.png',
        slug: 'one-dollar-ai-agent',
      }}
      header={{
        category: 'MINIMALIST_ARCHITECT',
        hash: '1dollarai',
        readTime: '06 MIN READ',
        title: (
          <>
            The $1/Month <br />
            <span className="text-cyber-purple">AI Agent</span>
          </>
        ),
        subtitle: 'Breaking the Hosting Trap',
        description:
          'Breaking the 24/7 hosting trap. How to run a multi-channel AI backbone for the price of a single coffee.',
        image: '/blog-assets/one-dollar-ai-agent.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        {
          label: 'THE $1/MONTH AI AGENT',
          href: '/blog/one-dollar-ai-agent',
        },
      ]}
    >
      <section>
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">01</span>
          The 24/7 Hosting Trap
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Most AI agents are deployed on dedicated VPS instances (EC2,
          DigitalOcean, etc.). This means you pay for compute 100% of the time,
          even when the agent is idle. For a personal assistant, this is
          extremely inefficient. You're effectively paying a "waiting tax" for
          23 hours a day.
        </p>
        <p className="text-zinc-200 leading-relaxed text-lg mt-6">
          `serverlessclaw` flips the script. We don't host an agent; we host a{' '}
          <strong>Gateway</strong>.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">02</span>
          Scale-to-Zero Architecture
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          By leveraging **AWS Lambda** as the primary entry point and **AWS
          Fargate** on-demand for the reasoning engine, we achieve a true
          "Scale-to-Zero" state. When you're not talking to your agent, your
          infrastructure cost is essentially zero.
        </p>
      </section>

      <SystemFlow nodes={COST_NODES} edges={COST_EDGES} height="350px" />

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">03</span>
          The Blueprint for $1/Month
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Achieving the $1/month target requires aggressive optimization of
          every AWS component. We use DynamoDB in on-demand mode for task state
          and S3 for long-term memory. The "spiky" nature of these services
          aligns perfectly with personal AI usage patterns.
        </p>
        <div className="mt-8 p-6 bg-zinc-900/50 border border-white/10 rounded-sm font-mono text-[11px] text-zinc-200">
          <div className="flex items-center gap-2 text-cyber-purple mb-2">
            <DollarSign className="w-3 h-3" />
            <span>COST_OPTIMIZATION_LOG.json</span>
          </div>
          {`{
  "compute": "Lambda (Gateway) + Fargate (On-Demand)",
  "storage": "DynamoDB (On-Demand) + S3 (Standard-IA)",
  "monthly_estimate": {
    "idle_cost": "$0.00",
    "active_cost_per_query": "$0.0004",
    "total_target": "$1.00 - $1.50"
  }
}`}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">04</span>
          Co-Evolution vs. Divergence
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Infrastructure is only one part of the cost equation. The other is
          **Evolution**. At ClawMore, we maintain a central hub of collective
          intelligence. If you choose to **Co-Evolve**—syncing your agent's
          unique mutations back to the hub—the service is completely free.
        </p>
        <p className="text-zinc-200 leading-relaxed text-lg mt-4">
          We only apply a "Mutation Tax" to those who choose **Private
          Divergence**. If you want a one-way sync from our hub to maintain an
          isolated infrastructure empire without contributing back, we charge a
          small fee per mutation. For the community-minded architect, the
          $1/month target is purely an infrastructure play.
        </p>
      </section>

      <section className="mt-16 mb-24">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">05</span>
          The Persistence Challenge
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          The trade-off for scale-to-zero is the "Cold Start" and state loss. In
          our next entry, **The Bridge Pattern**, we'll explain how we solved
          the persistent connection problem in an ephemeral world.
        </p>
      </section>
    </BlogLayout>
  );
}
