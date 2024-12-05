import React from "react";
import Image from "next/image";
import apple from '@/app/assets/Apple.png';
import MS from '@/app/assets/microsoft 1.png';
import group from '@/app/assets/Group 246.png';
import slack from '@/app/assets/Slack_Technologies_Logo 1.png'

const Section3 = () =>{
    return(
        <div className=" py-[140px] px-[220px] space-y-10">
            <div className="h-[87px] items-center flex justify-center">
                <h1 className="font-[Inter] font-bold text-[72px]  ">Our sponsors</h1>
            </div>

            <div className="h-[71px] flex justify-between">
                <Image src={apple} alt="loading" width={54.47} height={54.47}></Image>
                <Image src={MS} alt="loading" width={200} height={62}></Image>
                <Image src={slack} alt="loading" width={200} height={71}></Image>
                <Image src={group} alt="loading" width={200} height={69.81}></Image>
            </div>
        </div>
    )
}

export default Section3;