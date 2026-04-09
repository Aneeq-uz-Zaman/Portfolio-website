import dynamic from 'next/dynamic';

const PortfolioApp = dynamic(() => import('../src/App'), { ssr: false });

export default function CatchAllPage() {
  return <PortfolioApp />;
}
