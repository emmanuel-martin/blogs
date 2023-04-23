export default function newsletter() {
  return (
    <section className='mt-4'>
      <div className='container mx-auto md:px-20 py-16 text-center'>
        <h1 className='font-bold text-3xl'>Subscribe to my newsletter</h1>

        <div className='py-4 mt-4'>
          <input
            type='text'
            className='border rounded-full w-64 py-3 px-3 mr-4 md:w-96
                    text-gray-700 focus:outline-none focus:shadow-outline'
            placeholder='Enter Your Email'
          />

          <button className='bg-orange-400 px-10 py-4 rounded-full text-gray-50 text-sm opacity-80 hover:opacity-100'>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
