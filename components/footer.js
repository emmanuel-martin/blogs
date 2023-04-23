import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';
import Link from 'next/link';
import Newsletter from './_child/newsletter';

export default function footer() {
  const bg = {
    // backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
  };

  return (
    <footer className='' style={bg}>
      <Newsletter></Newsletter>
      <div className='container mx-auto flex justify-center py-2'>
        <div className='py-5'>
          <div className='flex gap-6 justify-center'>
            <Link href={'https://www.facebook.com/emmanuelmartinfb'}>
              <a>
                <ImFacebook color='#888888' />
              </a>
            </Link>
            <Link href={'https://www.twitter.com/emmanuelmartin_'}>
              <a>
                <ImTwitter color='#888888' />
              </a>
            </Link>
            <Link href={'https://www.youtube.com/@emmanuel-martin'}>
              <a>
                <ImYoutube color='#888888' />
              </a>
            </Link>
          </div>

          <p className='py-5 text-gray-400'>
            Copyright ©2023{' '}
            <a
              href='https://www.emmanuel.codes'
              className='hover:text-gray-700'
            >
              Emmanuel Martin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
