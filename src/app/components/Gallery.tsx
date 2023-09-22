import type { ImagesResults } from '@/models/Images';

// Components
import ImgConatiner from './ImgConatiner';
import Footer from './Footer';

// Utilities
import fetchImages from '@/lib/fetchImages';
import addBlurredDataUrls from '@/lib/getBase64';
import getPrevNextPages from '@/lib/getPrevNextPages';

type Props = {
  term?: string | undefined;
  page?: string | undefined;
};

export default async function Gallery({ term = 'curated', page }: Props) {
  let url;
  if (term === 'curated' && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (term === 'curated') {
    url = 'https://api.pexels.com/v1/curated';
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${term}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${term}&page=${page}`;
  }

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images || images.per_page === 0) {
    return <h2 className='m-4 text-2xl font-bold'>No Images Found</h2>;
  }
  const photosWithBlur = await addBlurredDataUrls(images);

  // Calculate pagination

  const { prevPage, nextPage } = getPrevNextPages(images);

  const footerProps = { term, page, nextPage, prevPage };

  return (
    <>
      <section className='px-1 my-3 grid grid-cols-gallery auto-rows-[10px]'>
        {photosWithBlur.map((photo) => (
          <ImgConatiner key={photo.id} photo={photo} />
        ))}
      </section>
      <Footer {...footerProps} />
    </>
  );
}
