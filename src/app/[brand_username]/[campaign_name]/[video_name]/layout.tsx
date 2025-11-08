export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ video_name: 'sample' }];
}

export default function VideoNameLayout({ children }: { children: React.ReactNode }) {
  return children;
}