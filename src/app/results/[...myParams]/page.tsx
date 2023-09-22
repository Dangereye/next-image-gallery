import Gallery from '@/app/components/Gallery';

type Props = {
  params: {
    myParams: (string | undefined)[];
  };
};

export function generateMetadata({ params: { myParams } }: Props) {
  const term = myParams?.[0] ?? 'curated';
  const page = myParams?.[1] ?? '1';

  return {
    title: `Results for ${term} - Page ${page}`,
  };
}

export default function SearchResults({ params: { myParams } }: Props) {
  const term = myParams?.[0] ?? 'curated';
  const page = myParams?.[1] ?? '1';

  return <Gallery term={term} page={page} />;
}
