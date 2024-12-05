import React from 'react';
import Image from 'next/image';
import arrow from "@/app/assets/Vector.png"

const Herosection = () => {
  return (
    <div className='h-[829px] bg-[rgb(4,56,115)] py-[140px] px-[220px] flex items-center'>
        <div className='w-[656px] h-[361px]'>
            <div className='h-[238px]'>
                <h1 className='font-[Inter] font-bold text-[56px] text-[rgb(255,255,255)] leading-[70px] h-[154px] tracking-[-2%]'>Get More Done with whitepace</h1>
                <p className='font-[Inter] font-normal text-[18px] text-[rgb(255,255,255)] tracking-[-2%] leading-[30px]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            </div>
            <div className=' h-[123px] flex items-end'>
                <button className='bg-[rgb(79,156,249)] h-[63px] w-[219px] rounded-lg p-5 text-[rgb(255,255,255)] flex items-center gap-2'>Try Whitepace Free 
                <Image src={arrow} alt='loading' width={5} height={5}></Image>
            </button>
            </div>
        
        </div>
        <div className='w-[824px] h-[549px] bg-[rgba(196,222,253,1)]'></div>
    </div>
  )
}

export default Herosection;