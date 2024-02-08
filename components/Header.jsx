/** @format */

import Link from "next/link";

export default function Header() {
  return (
    <>
      <div>
        <nav className='flex justify-between'>
          <div>
            <img src='' alt='' />
          </div>
          <ul className='flex flex-row gap-x-10 font-rubik font-normal opacity-50'>
            <li>
              <Link href='./'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About Me</Link>
            </li>
            <li>
              <Link href='/works'>My Works</Link>
            </li>
            <li>
              <Link href='/contact'>Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/*  */}
      <div className='relative flex flex-col w-full justify-center flex-wrap '>
        <div className='absolute -right-36 -top-16 -z-10 '>
          <img src='/images/Vector 8.png' alt='' className='w-10/12 ' />
        </div>
        <div>
          <h1 className=' text-7xl font-syne text-center mx-14 py-36 font-bold '>
            Adaptive Logo Design for Your Brand
          </h1>
        </div>
        <div className='flex justify-center py-8'>
          <button>Explore Works</button>
        </div>
      </div>
    </>
  );
}
