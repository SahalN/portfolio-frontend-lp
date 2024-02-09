/** @format */

export default function Contact() {
  return (
    <>
      <div className='relative pb-20 border-b-2 pt-44'>
        <div className='absolute -left-[500px] -top-14 -z-10 '>
          <img src='/images/Vector 8.png' alt='' className='w-10/12 ' />
        </div>
        <div>
          <h1 className='text-7xl font-syne'>Contact Me</h1>
        </div>
        <div>
          <p className='text-[#949494]'>For Any Project Knock Us</p>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-row px-20 pb-10 pt-44'>
        <div className='flex-1'>
          <h1 className='text-[64px] font-syne leading-tight p-10'>
            Get in Touch With Us
          </h1>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex-1 '>
            <div className='flex flex-col pb-10 '>
              <label htmlFor=''>NAME</label>
              <input type='text' className='opacity-0 ' />
              <hr class='h-px  bg-white border-0 ' />
            </div>
            <div className='flex flex-col pb-10'>
              <label htmlFor=''>SUBJECT</label>
              <input type='text' className='opacity-0 ' />
              <hr class='h-px  bg-white border-0 ' />
            </div>
            <div className='flex flex-col pb-10'>
              <label htmlFor=''>MESSAGE</label>
              <input type='text' className='opacity-0 ' />
              <hr class='h-px  bg-white border-0 ' />
            </div>
          </div>
          <div>
            <button className='py-2 mb-2 text-[13px] text-center text-white  rounded-full px-8 hover:bg-[#FF9142]  bg-[#FF9142] font-rubik font-bold '>
              SEND
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col place-items-center'>
        <div>
          <img src='/images/Rectangle 6.png' alt='' />
        </div>
        <div className='flex flex-row gap-4 py-8 text-2xl font-bold tracking-widest font-syne'>
          <div>Street Avenue 21, CA</div>
          <div>+9 0283353</div>
          <div className='underline'>info@aaronn.com</div>
        </div>
      </div>
    </>
  );
}
