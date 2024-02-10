/** @format */

export default function Work() {
  return (
    <>
      <div className='relative pb-20 border-b-2 pt-44'>
        <div className='absolute -left-[500px] -top-14 -z-10 '>
          <img src='/images/vectorDelapan.png' alt='' className='w-10/12 ' />
        </div>
        <div>
          <h1 className='text-7xl font-syne'>My works</h1>
        </div>
        <div>
          <p className='text-[#949494]'>Showcase About Works</p>
        </div>
      </div>
      {/*  */}
      <div className='grid grid-cols-3 place-items-center pt-28 '>
        <div className='text-center'>
          <img src='/images/imageEnam.png' alt='' className='pb-5' />
          <p className='pb-2 text-sm font-bold tracking-widest'>BLUE</p>
          <h2 className='text-2xl font-bold'>Orvillebury</h2>
        </div>
        <div className='text-center'>
          <img src='/images/imageTujuh.png' alt='' className='pb-5' />
          <p className='pb-2 text-sm font-bold tracking-widest'>GREEN</p>
          <h2 className='text-2xl font-bold'>West Lavada</h2>
        </div>
        <div className='text-center'>
          <img src='/images/imageDelapan.png' alt='' className='pb-5' />
          <p className='pb-2 text-sm font-bold tracking-widest'>AQUA</p>
          <h2 className='text-2xl font-bold'>Rempelshire</h2>
        </div>
      </div>
      <div className='grid grid-cols-2 pt-20 place-items-center'>
        <div className='text-center'>
          <img src='/images/imageSembilan.png' alt='' className='pb-5' />
          <p className='pb-2 text-sm font-bold tracking-widest'>LIME</p>
          <h2 className='text-2xl font-bold'>Delfinaland</h2>
        </div>
        <div className='text-center'>
          <img src='/images/imageSepuluh.png' alt='' className='pb-5' />
          <p className='pb-2 text-sm font-bold tracking-widest'>FUCHSIA</p>
          <h2 className='text-2xl font-bold'>Buckridgeburgh</h2>
        </div>
      </div>
      <div className='grid grid-cols-3 pt-20 place-items-center pb-28'>
        <div className='text-center'>
          <img src='/images/imageSebelas.png' alt='' className='pb-5' />
          <p className='pb-2 text-sm font-bold tracking-widest'>BLACK</p>
          <h2 className='text-2xl font-bold'>Pfefferstad</h2>
        </div>
        <div className='text-center'>
          <img src='/images/imageDuaBelas.png' alt='' className='pb-5' />
          <p className='pb-2 text-sm font-bold tracking-widest'>PURPLE</p>
          <h2 className='text-2xl font-bold'>South Adrienne</h2>
        </div>
        <div className='text-center'>
          <img src='/images/imageTigaBelas.png' alt='' className='pb-5' />
          <p className='pb-2 text-sm font-bold tracking-widest'>MAROON</p>
          <h2 className='text-2xl font-bold'>Lake Trevor</h2>
        </div>
      </div>
      <div className='flex justify-center pb-44'>
        <button className='py-4 mb-2 text-[13px] text-center text-[#FF9142]  rounded-full px-10 hover:bg-[#FF9142]  ring-1 ring-[#FF9142] font-rubik font-bold '>
          LOAD MORE WORKS
        </button>
      </div>
    </>
  );
}
