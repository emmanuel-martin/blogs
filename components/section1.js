import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import fetcher from '../lib/fetcher';
import Spinner from './_child/spinner';
import Error from './_child/error';

export default function section1() {
  const { data, isLoading, isError } = fetcher('api/trending');

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  SwiperCore.use([Autoplay]);

  const bg = {};

  return (
    <section className='py-16' style={bg}>
      <div className='container mx-auto md:px-20 w-4/5 sm:w-1/2'>
        <Swiper
          slidesPerView={1}
          loop={true}
         autoplay= {{
              delay: 3000
        }}
        >
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <Slide data={value}></Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({ data }) {
  const { id, title, category, img, published, subtitle, author } = data;

  return (
    <div className='grid md:grid-cols-2 gap-x-20	'>
      <div className='image'>
        <Link href={`/trending/${id}`}>
          <a>
            <Image src={img || '/'} width={600} height={600} class="cover-image" />
          </a>
        </Link>
      </div>
      <div className='info flex justify-center flex-col'>
        <div className='title'>
          <Link href={`/trending/${id}`}>
            <a className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'>
              {title || 'Unknown'}
            </a>
          </Link>
        </div>
        <div className='cat  mt-4'>
          <Link href={`/trending/${id}`}>
            <a className='text-orange-600 hover:text-orange-800'>
              {category || 'Unknown'}
            </a>
          </Link>
          <Link href={`/trending/${id}`}>
            <a className='text-gray-800 hover:text-gray-600'>
             &nbsp; - {published || 'Unknown'}
            </a>
          </Link>
        </div>
        <p className='text-gray-500 py-3 text-2xl md:text-md w-4/5 leading-snug line-clamp-1'>
          {subtitle || 'unknown'}
        </p>
        <div className='border-1 border-solid text-[#888888] text-lg font-semibold hover:underline'>
          <Link href={`/trending/${id}`}>
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
