import React from "react";
import Image from "next/image";
import logo from "@/app/assets/Logo Icon.png"

const Footer = () => {
  return (
    <div className="h-[461px] pt-[140px] px-[220px] bg-[rgb(4,56,115)]">
      <div className="h-289px] justify-between">
        <div className="h-[169px] flex justify-between">
          <div className="w-[295px]">
            <div className="flex items-center space-x-2">
                <div>
                <Image src={logo} alt="loading" width={15} height={5}></Image>
                </div>
                <div>    
                <h1 className="font-[Inter] font-bold text-[28px] text-[rgb(255,255,255)]">
                  whitepace
                </h1>
                </div>
            </div>
            <div>
              <p className="text-[rgb(255,255,255)]">
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
          </div>
           
          <div className=" text-[rgb(255,255,255)]">
            <h1>Product</h1>
            <ul className="mt-3">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer Stories</li>
            </ul>
          </div>

          <div className="text-[rgb(255,255,255)]">
            <h1>Resources</h1>
            <ul className="mt-3">
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help center</li>
            </ul>
          </div>

          <div className="text-[rgb(255,255,255)]">
            <h1>Company</h1>
            <ul className="mt-3">
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center ">
            <h1 className="text-white font-normal text-[16px]">©2021 Whitepace LLC.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
