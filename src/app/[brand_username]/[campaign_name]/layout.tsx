// Server layout to host generateStaticParams for static export
export const dynamic = 'force-static';

export async function generateStaticParams() {
  try {
    const campaigns = (await import('@/data/export-campaigns.json')).default as Array<{brand_username: string; campaign_name: string}>;
    return campaigns.map((item) => ({
      brand_username: item.brand_username,
      campaign_name: item.campaign_name,
    }));
  } catch (err) {
    console.error('Error reading export campaign list:', err);
    return [];
  }
}

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return children;
}