// Server layout to host generateStaticParams for static export
export const dynamic = 'force-static';

export async function generateStaticParams() {
  try {
    const res = await fetch('https://preview.totan.in/api/public/all-campaigns');
    if (!res.ok) {
      console.error('Failed to fetch campaigns for static export:', res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    const campaigns = Array.isArray(data) ? data : data.data || [];

    return campaigns.map((item: any) => ({
      brand_username: item.brand_username,
      campaign_name: item.campaign_name,
    }));
  } catch (err) {
    console.error('Error generating static params:', err);
    return [];
  }
}

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return children;
}