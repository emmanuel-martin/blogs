import Format from '../../layout/format';
import Author from '../../components/_child/author';
import Image from 'next/image';
import Related from '../../components/_child/related';
import getTrending from '../../lib/trending';
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import ErrorComponent from '../../components/_child/error';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';


export default function Page({ fallback }) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`/api/trending/${postId}`);

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <ErrorComponent></ErrorComponent>;

  return (
    <SWRConfig value={{ fallback }}>
      <Article {...data}></Article>
    </SWRConfig>
  );
}


function Article({ title, img, subtitle, description, author }) {
  return (
    <Format>
      <section className='container mx-auto md:px-2 py-16 w-4/5 sm:w-1/2'>
        <div className='post'>
          <h1 className='font-bold text-4xl text-center pb-5'>
            {title || 'No Title'}
          </h1>

          <p className='text-gray-500 text-xl text-center'>
            {subtitle || 'No Title'}
          </p>

          <div className='py-8'>
            <Image src={img || '/'} width={900} height={600} class="cover-image"></Image>
          </div>

          <div className='text-gray-600 whitespace-pre-line text-lg flex flex-col gap-4'>
            {<div className="desc" dangerouslySetInnerHTML={{ __html: description }} /> || 'No Description'}
          </div>
        </div>

        <Related></Related>
      </section>
    </Format>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getTrending(params.postId);

  return {
    props: {
      fallback: {
        '/api/trending': posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const popular = await getTrending();
  const paths = popular.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
