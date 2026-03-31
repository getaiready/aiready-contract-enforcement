'use client';

import { Cloud, Database } from 'lucide-react';
import BlogLayout from '../_components/BlogLayout';
import SystemFlow from '../../../components/SystemFlow';

const PERSISTENCE_NODES = [
  {
    id: 'local_agent',
    data: { label: 'OpenClaw Local Agent', type: 'agent' },
    position: { x: 0, y: 0 },
  },
  {
    id: 'sync_engine',
    data: { label: 'ClawMore Sync Engine', type: 'bus' },
    position: { x: 200, y: 0 },
  },
  {
    id: 's3_storage',
    data: { label: 'S3 (Persistent Memory)', type: 'agent' },
    position: { x: 400, y: -50 },
  },
  {
    id: 'dynamodb',
    data: { label: 'DynamoDB (State/Locks)', type: 'agent' },
    position: { x: 400, y: 50 },
  },
];

const PERSISTENCE_EDGES = [
  {
    id: 'e1',
    source: 'local_agent',
    target: 'sync_engine',
    label: 'Push State',
    animated: true,
  },
  {
    id: 'e2',
    source: 'sync_engine',
    target: 's3_storage',
    label: 'Archive',
    animated: true,
  },
  {
    id: 'e3',
    source: 'sync_engine',
    target: 'dynamodb',
    label: 'Index',
    animated: true,
  },
];

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'Persistence: S3 + DynamoDB State Management',
        description:
          'Scaling local-first state to cloud scale. How we use S3 and DynamoDB to provide a persistent backbone.',
        date: '2026-04-18',
        image: '/blog-assets/openclaw-chronicles-07-persistence.png',
        slug: 'openclaw-chronicles-07-persistence',
      }}
      header={{
        category: 'OPENCLAW_CHRONICLES // PART_07',
        hash: 'persistence',
        readTime: '08 MIN READ',
        title: (
          <>
            Persistence: <br />
            <span className="text-cyber-purple">Cloud-Scale State</span>
          </>
        ),
        subtitle: 'Scaling the Unscalable',
        description:
          "Scaling the Unscalable. How ClawMore bridges OpenClaw's local-first philosophy with AWS-grade durability.",
        image: '/blog-assets/openclaw-chronicles-07-persistence.png',
      }}
      breadcrumbItems={[
        { label: 'BLOG', href: '/blog' },
        {
          label: 'PERSISTENCE',
          href: '/blog/openclaw-chronicles-07-persistence',
        },
      ]}
    >
      <section>
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">01</span>
          The Ephemeral Challenge
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          In Part 02, we explored OpenClaw's local-first philosophy—storing
          state in Markdown files on your disk. But what happens when you want
          to run that agent across multiple machines, or scale it to a managed
          fleet? Local storage becomes a bottleneck for collaboration and high
          availability.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">02</span>
          ClawMore's Sync Backbone
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          ClawMore innovates by providing a cloud-scale persistence layer that
          mirrors your local OpenClaw state. We use **AWS S3** for long-term
          "Persistent Memory" (storing the actual Markdown and YAML files) and
          **AWS DynamoDB** for real-time state indexing, locking, and task
          orchestration.
        </p>
      </section>

      <SystemFlow
        nodes={PERSISTENCE_NODES}
        edges={PERSISTENCE_EDGES}
        height="350px"
      />

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">03</span>
          The S3 + DynamoDB Pattern
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg mb-8">
          Why this specific combination? It allows us to maintain the simplicity
          of OpenClaw's file-based state while gaining the benefits of a global
          infrastructure:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm">
            <Cloud className="w-6 h-6 text-cyber-purple mb-4" />
            <h4 className="font-bold mb-2 uppercase tracking-tight">
              S3: File Mirroring
            </h4>
            <p className="text-sm text-zinc-400">
              Every mutation in your local OpenClaw state is asynchronously
              synced to a versioned S3 bucket, providing an immutable audit
              trail.
            </p>
          </div>
          <div className="p-6 border border-white/5 bg-white/[0.02] rounded-sm">
            <Database className="w-6 h-6 text-cyber-purple mb-4" />
            <h4 className="font-bold mb-2 uppercase tracking-tight">
              DynamoDB: Live Indexing
            </h4>
            <p className="text-sm text-zinc-400">
              Metadata about your agent's current task, its available skills,
              and its heartbeat status are stored in DynamoDB for
              sub-millisecond access.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 mb-24">
        <h2 className="text-3xl font-black tracking-tight mb-6 flex items-center gap-4">
          <span className="text-cyber-purple font-mono text-sm">04</span>
          Safety First
        </h2>
        <p className="text-zinc-200 leading-relaxed text-lg">
          Scaling state to the cloud opens up new security vectors. If an agent
          can sync its memory to S3, how do we ensure it doesn't leak sensitive
          data or execute malicious instructions from a compromised sync? In our
          next entry, **Ironclad Autonomy**, we'll dive into VPC isolation and
          our multi-layered security guards.
        </p>
      </section>
    </BlogLayout>
  );
}
