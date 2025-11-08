export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ slug: 'example' }];
}

export default function WatchSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}