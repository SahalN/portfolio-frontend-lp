/** @format */

export default function About() {
  return (
    <>
      <div className='relative pb-20 border-b-2 pt-44'>
        <div className='absolute -left-[500px] -top-14 -z-10 '>
          <img src='/images/Vector 8.png' alt='' className='w-10/12 ' />
        </div>
        <div>
          <h1 className='text-7xl font-syne'>About Me</h1>
        </div>
        <div>
          <p className='text-[#949494]'>Little Brief About Myself</p>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-row px-20 pb-10 pt-44'>
        <div className='flex-1'>
          <h1 className='text-[80px] font-syne leading-tight font-bold'>
            My mission is to make design easier.
          </h1>
        </div>
        <div className='flex-1'>
          <p className='text-[#949494] text-[21px] text-left font-rubik'>
            Create custom Designs with AARONN that converts more visitors than
            any website. With lots of unique design, you can easily select a
            logo without hassle. Create custom landing logos with AARONN that
            converts more visitors than any website. With lots of revisions, you
            can easily build a logo without porbolem.
          </p>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-row justify-between gap-4 pt-5 pb-44'>
        <div>
          <img src='/images/g2.png' alt='' />
        </div>
        <div>
          <img src='/images/g1.png' alt='' />
        </div>
      </div>
      {/*  */}
      <div className='pb-56 text-5xl font-bold font-syne'>
        <div className='pb-10'>
          <h2>Follow me on:</h2>
        </div>
        <div className='flex flex-row text-[#949494] gap-4 justify-between text-4xl font-rubik'>
          <div>DRIBBLE</div>
          <div>TWITTER</div>
          <div>FACEBOOK</div>
          <div>INSTAGRAM</div>
        </div>
      </div>
    </>
  );
}
