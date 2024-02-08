/** @format */

export default function HomePage() {
  return (
    <>
      <div className='flex flex-row py-10'>
        <div className='flex-1'>
          <h1 className='font-syne py-8 text-5xl font-bold'>
            Let’s get know about me closer
          </h1>
          <p>
            Aaronn is a New York-based visual designer focusing on branding and
            visual identity. Her portfolio showcases her wide range of work,
            spanning books, posters and web design.
          </p>
          <button>Discover More About Me</button>
        </div>
        <div className='flex-1'>
          <img src='' alt='' />
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col place-items-center py-8'>
        <div>
          <h1 className='text-5xl font-syne text-center'>
            My Projects Highlight
          </h1>
        </div>
        <div>
          <button>Explore More</button>
        </div>
      </div>
      {/*  */}
      <div className='grid grid-cols-2 place-items-center p-4 gap-4'>
        <div>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <h2></h2>
          </div>
          <div className='grid grid-cols-2'>
            <div>Client:</div>
            <div>Organc</div>
            <div>Work:</div>
            <div>Logo design</div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <h2></h2>
            </div>
            <div className='grid grid-cols-2'>
              <div>Client:</div>
              <div>Organc</div>
              <div>Work:</div>
              <div>Logo design</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <h2></h2>
            </div>
            <div className='grid grid-cols-2'>
              <div>Client:</div>
              <div>Organc</div>
              <div>Work:</div>
              <div>Logo design</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <h2></h2>
            </div>
            <div className='grid grid-cols-2'>
              <div>Client:</div>
              <div>Organc</div>
              <div>Work:</div>
              <div>Logo design</div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-row py-8  gap-y-4 justify-center'>
        <div>
          <div>
            <h1>Testimonial</h1>
            <p>
              “Aaronn was fantastic to work with from start to finish. We were
              looking for a simple, stand-out logo and he delivered. I tried
              designing the logo myself thinking I wouldn’t need to pay the
              money for a professional graphic designer but I was very wrong.
              Working with Aaronn was worth every penny and was surprisingly
              affordable! I remember him saying simplicity is key to a
              successful logo and boy he was right. I can’t thank Aaronn enough
              for his effort and professionalism. I would recommend him to
              anyone looking for a design!”
            </p>
            <p className='pt-8'>-Martin lee</p>
          </div>
        </div>
        <div>
          <img src='' alt='' />
        </div>
      </div>
    </>
  );
}
