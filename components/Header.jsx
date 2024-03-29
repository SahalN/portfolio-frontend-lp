/** @format */

import Link from "next/link";

export default function Header() {
  return (
    <>
      <div>
        <nav className='flex justify-between'>
          <div>
            <Link href='./'>
              <img src='/images/logo.png' alt='' className='w-32' />
            </Link>
          </div>
          <ul className='flex flex-row font-normal opacity-50 gap-x-10 font-rubik'>
            <li>
              <Link href='./' className='hover:text-white'>
                Home
              </Link>
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
    </>
  );
}
