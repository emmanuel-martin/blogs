import Link from 'next/link';
import Image from 'next/image';
import Author from './author';
import fetcher from '../../lib/fetcher';
import Spinner from './spinner';
import Error from './error';

export default function Ralated() {
  const { data, isLoading, isError } = fetcher('api/posts');

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className='pt-20'>
      <h1 className='font-bold text-3xl py-10'>Related</h1>

      <div className='flex flex-col gap-10'>
        {data.map((value, index) => (
          <Post key={index} data={value}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, description, img, published, author } = data;

  return (
    <Link href={`/posts/${id}`}>
      <div className='flex gap-5 cursor-pointer'>
        <div className='image flex flex-col justify-start'>
          <Image src={img || ''} className='rounded' width={60} height={40} />
        </div>
        <div className='info flex justify-center flex-col'>
          <div className='title'>
            <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>
              {title || 'No Title'}
            </a>
          </div>
          <div className='cat'>
            <a className='text-orange-600 hover:text-orange-800'>
              {category || 'No Category'}
            </a>
            <a className='text-gray-800 hover:text-gray-600'>
              - {published || ''}
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
