import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/assets/Logo Icon.png'

const Header = () => {
  return (
    <div className='bg-[rgb(4,56,115)] h-[92px] w-full py-4 px-[220px] flex justify-between'>
        <div className='flex items-center gap-2 '>
            <div>
            <Image src={logo} alt='loading' width={25} height={25}></Image>
            </div>
            <div>
            <h1 className='font-[Inter] font-bold text-[28px] text-[rgb(255,255,255)]'>whitepace</h1>
            </div>
        </div>
        <div className='flex h-[60px] gap-[60px] items-center'>
            <ul className='flex gap-[32px] text-[rgb(255,255,255)]'>
                <li><Link href="#">Products</Link></li>
                <li><Link href="#">Solutions</Link></li>
                <li><Link href="#">Resources</Link></li>
                <li><Link href="#">Pricing</Link></li>
            </ul>

            <div>
                <button className='py-4 px-10 bg-[rgb(255,228,146)] rounded-lg text-[rgba(4,56,115)] font-[Inter] font-medium text-[18px'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Header