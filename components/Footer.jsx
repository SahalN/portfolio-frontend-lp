/** @format */
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <>
      <div className='flex flex-col text-center px-[150px] py-10'>
        <div className='py-10'>
          <div>
            <p className='pb-6 leading-tight text-[24px] text-[#FF9142] font-syne font-semibold  tracking-widest'>
              Get in Touch With Us
            </p>
          </div>
          <div>
            <h1 className='pb-20 text-6xl font-bold underline'>
              info@aaronn.com
            </h1>
          </div>
        </div>
        {/*  */}
        <div className='grid grid-cols-2 py-8 '>
          <div className='flex items-center col-span-1 '>
            <img src='/images/logo.png' alt='' />
          </div>
          <div className='flex flex-row justify-around text-2xl'>
            <div className='flex flex-col gap-4 text-left '>
              <div>
                <p>Street Avenue 21, CA</p>
              </div>
              <div>
                <p>0-8-00-888-000</p>
              </div>
            </div>
            <div className='flex flex-col gap-4 '>
              <div>
                <p>+9 0283353</p>
              </div>
              <div className='flex flex-row justify-start gap-2 '>
                <div>
                  <FacebookIcon />
                </div>
                <div>
                  <XIcon />
                </div>
                <div>
                  <InstagramIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-4 border-t-2'>
          <p>© 2023. Ideapeel. All rights reserved. </p>
        </div>
      </div>
    </>
  );
}
