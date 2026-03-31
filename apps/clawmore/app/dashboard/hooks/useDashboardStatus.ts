import React from 'react';

interface DashboardStatus {
  awsSpendCents: number;
  awsInclusionCents: number;
  aiTokenBalanceCents: number;
  aiRefillThresholdCents: number;
  mutationCount: number;
  coEvolutionOptIn: boolean;
  autoTopupEnabled: boolean;
  recentMutations: any[];
  activeRepos?: number;
  awsAccountId?: string | null;
  repoUrl?: string | null;
  provisioningStatus?: 'provisioning' | 'complete' | 'failed' | null;
  provisioningError?: string | null;
  planStatus?: string;
}

export function useDashboardStatus(initialStatus: DashboardStatus) {
  const [provisionStatus, setProvisionStatus] = React.useState(
    initialStatus.provisioningStatus || 'none'
  );
  const [provisionAccountId, setProvisionAccountId] = React.useState(
    initialStatus.awsAccountId
  );
  const [provisionRepoUrl, setProvisionRepoUrl] = React.useState(
    initialStatus.repoUrl
  );
  const [pollCount, setPollCount] = React.useState(0);

  React.useEffect(() => {
    if (provisionStatus !== 'provisioning') return;
    if (pollCount >= 120) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch('/api/account/status');
        if (res.ok) {
          const data = await res.json();
          setProvisionStatus(data.status);
          if (data.accounts?.[0]) {
            setProvisionAccountId(data.accounts[0].awsAccountId);
            setProvisionRepoUrl(data.accounts[0].repoUrl);
          }
          if (data.status === 'complete' || data.status === 'failed') {
            clearInterval(interval);
          }
        }
      } catch (err) {
        console.error('Provisioning poll error:', err);
      }
      setPollCount((c) => c + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [provisionStatus, pollCount]);

  return {
    provisionStatus,
    provisionAccountId,
    provisionRepoUrl,
    pollCount,
    setProvisionStatus,
  };
}
