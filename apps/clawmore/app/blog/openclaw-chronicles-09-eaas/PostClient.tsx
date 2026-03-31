'use client';

import BlogLayout from '../_components/BlogLayout';

export default function BlogPost() {
  return (
    <BlogLayout
      metadata={{
        title: 'OpenClaw Chronicles',
        description: 'Evolving AI Agents',
        date: '2026-03-31',
        image: '/blog-assets/default.png',
        slug: 'openclaw-chronicles-09-eaas',
      }}
      header={{
        category: 'OPENCLAW_CHRONICLES // EVOLUTION',
        hash: 'openclaw-chronicles-09-eaas-27',
        readTime: '7 MIN READ',
        title: 'OpenClaw Chronicles',
        subtitle: 'Evolving the Future of Agents',
        description: 'Evolving AI Agents',
        image: '/blog-assets/default.png',
      }}
    >
      <section>
        <p className="text-zinc-200 leading-relaxed text-lg">
          The contents of this post are being migrated to our unified agentic
          architecture. The local-first philosophy remains our North Star.
        </p>
      </section>
    </BlogLayout>
  );
}
