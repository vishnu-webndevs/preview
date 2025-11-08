export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ id: '1' }];
}

export default function VideoIdLayout({ children }: { children: React.ReactNode }) {
  return children;
}