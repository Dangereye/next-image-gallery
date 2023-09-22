import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='px-1 my-3 mx-auto text-center'>
      <h1 className='text-2xl font-bold sm:text-3xl  whitespace-nowrap'>404</h1>
      <p>Sorry, we could not find the page you requested.</p>
      <Link
        href='/'
        className='block py-2 px-4 mt-4 mx-auto rounded-md bg-black w-max text-white uppercase'
      >
        go back
      </Link>
    </section>
  );
}
