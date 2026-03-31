'use client';

import { Share2 } from 'lucide-react';
import BlogLayout from '../_components/BlogLayout';
import SystemFlow from '../../../components/SystemFlow';

const ROUTER_NODES = [
  {
    id: 'channels',
    data: { label: 'WhatsApp / Discord / Slack', type: 'event' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'router',
    data: { label: 'Omni-Channel Router', type: 'bus' },
    position: { x: 200, y: 0 },
  },
  {
    id: 'agent_core',
    data: { label: 'OpenClaw Agent Core', type: 'agent' },
    position: { x: 400, y: 0 },
  },
];

const ROUTER_EDGES = [
  {
    id: 'e1',
    source: 'channels',
    target: 'router',
    label: 'Signal',
    animated: true,
  },
  {
    id: 'e2',
    source: 'router',
    target: 'agent_core',
    label: 'Route',
    animated: true,
  },
];

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: "The Message Router: OpenClaw's Neural Spine",
        description:
          'How OpenClaw handles omni-channel communication. Integrating WhatsApp, Discord, and Slack into a unified agentic spine.',
        date: '2026-04-05',
        image: '/blog-assets/openclaw-chronicles-03-neural-spine.png',
        slug: 'openclaw-chronicles-03-neural-spine',
      }}
      header={{
        category: 'OPENCLAW_CHRONICLES // PART_03',
        hash: 'neuralspine',
        readTime: '06 MIN READ',
        title: (
          <>
            The Message Router: <br />
            <span className="text-cyber-purple">OpenClaw's Neural Spine</span>
          </>
        ),
        subtitle: 'One Agent, Infinite Channels',
        description:
          'One agent, infinite channels. How OpenClaw unified WhatsApp, Discord, and Slack into a single, proactive nervous system.',
        image: '/blog-assets/openclaw-chronicles-03-neural-spine.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        {
          label: 'NEURAL SPINE',
          href: '/blog/openclaw-chronicles-03-neural-spine',
        },
      ]}
    >
      <section>
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">01</span>
          The Fragmentation Problem
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          As developers, our lives are scattered across platforms. We're on
          Slack for work, Discord for communities, WhatsApp for family, and
          Terminal for code. Most AI agents force you to come to *them*.
          OpenClaw's philosophy is the opposite: the agent should come to *you*.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">02</span>
          The Unified Signal Architecture
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          OpenClaw uses a centralized **Message Router** that acts as the neural
          spine of the system. It abstracts the complexities of different APIs
          (Webhooks, WebSockets, Long Polling) into a unified "Signal" format
          that the agent core can understand.
        </p>
      </section>

      <SystemFlow nodes={ROUTER_NODES} edges={ROUTER_EDGES} height="300px" />

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">03</span>
          Omni-Channel Context
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Because the router is centralized, OpenClaw maintains context across
          channels. You can start a task on your phone via WhatsApp and finish
          it at your desk via the Terminal. The agent knows exactly where you
          left off, regardless of the interface.
        </p>
        <div className="mt-8 p-6 bg-zinc-900/50 border border-white/10 rounded-sm font-mono text-[11px] text-zinc-200">
          <div className="flex items-center gap-2 text-cyber-purple mb-2">
            <Share2 className="w-3 h-3" />
            <span>ROUTER_CONFIG.yaml</span>
          </div>
          {`# OpenClaw Neural Spine Config
channels:
  whatsapp:
    enabled: true
    provider: "twilio"
  discord:
    enabled: true
    token: "ENV_DISCORD_TOKEN"
  slack:
    enabled: true
    workspace: "aiready-dev"
  terminal:
    enabled: true
    mode: "interactive"`}
        </div>
      </section>

      <section className="mt-16 mb-24">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">04</span>
          The Road to Execution
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Routing messages is just the first step. For an agent to be useful, it
          needs to turn those messages into actions. In our next entry,
          **AgentSkills**, we'll explore the execution standard that allows
          OpenClaw to run shell commands and manage your system safely.
        </p>
      </section>
    </BlogLayout>
  );
}
