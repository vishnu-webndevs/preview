export const dynamic = 'force-static';
export const dynamicParams = false;

// Provide at least one static param to satisfy static export constraints
export async function generateStaticParams() {
  return [{ id: '1' }];
}

export default function CampaignIdLayout({ children }: { children: React.ReactNode }) {
  return children;
}