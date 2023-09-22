import Link from 'next/link';

type Props = {
  term: string;
  page: string | undefined;
  prevPage: string | null;
  nextPage: string | null;
};

export default function Footer({ term, page, prevPage, nextPage }: Props) {
  if (!prevPage && !nextPage) {
    return null;
  }

  const pageNums: number[] = [];

  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNums.push(i);
    }
  }

  const nextPageArea = nextPage ? (
    <Link
      href={`/results/${term}/${nextPage}`}
      className={!prevPage ? 'mx-auto' : ''}
    >
      {!prevPage ? 'more' : null} &gt;&gt;&gt;
    </Link>
  ) : null;

  const prevPageArea = prevPage ? (
    <>
      <Link
        href={`/results/${term}/${prevPage}`}
        className={!nextPage ? 'mx-auto' : ''}
      >
        &lt;&lt;&lt; {!nextPage ? 'back' : null}
      </Link>
      {pageNums.map((num, i) =>
        page && num === parseInt(page) ? (
          <span key={i}>{num}</span>
        ) : (
          <Link href={`/results/${term}/${num}`} className='underline'>
            {num}
          </Link>
        )
      )}
    </>
  ) : null;
  return (
    <footer className='flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto'>
      {prevPageArea}
      {nextPageArea}
    </footer>
  );
}
