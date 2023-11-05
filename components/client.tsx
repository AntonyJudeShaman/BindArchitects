import React from "react";
import logo from "./logo.png";
import Image from "next/image";

function Client() {
  return (
    <div className="text-center items-center p-6 mx-auto mb-20  justify-center md:max-w-[78rem] max-w-[28rem]">
      <h1
        aria-label="Studio bind"
        className="2xl:text-6xl text-center mx-auto  justify-center  mt-28 title-gradient title-gradient4 dmsans flex flex-wrap md:max-w-[78rem] max-w-[28rem]  z-30 text-5xl lg:text-7xl md:text-6xl xl:text-8xl title-gradient    duration-1000  cursor-default text-edge-outline animate-title font-display"
      >
        Selected Clients
      </h1>

      
      <h1
            aria-label="Studio bind"
            className="text-muted-foreground dmsans text-lg mt-6"
          >
            We created brands used by thousand of people around the world. Our
        designs are 
            <span className="md:hidden hidden sm:inline-block">
              &nbsp; unique, useful and user-friendly
            </span>
          </h1>
          <h1
            aria-label="Studio bind"
            className=" md:inline-block sm:hidden text-muted-foreground dmsans text-lg "
          >
           unique, useful and user-friendly
          </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 max-w-[50rem] mx-auto mt-10 mb-10 justify-between">
        <div className="mx-auto mt-10 " >
          <Image height={70} width={70} alt="logo" src={logo} 
    style={{ filter: 'grayscale(100%)' }} />
        </div>
        <div className="mx-auto mt-10 " >
          <Image height={70} width={70} alt="logo" src={logo} 
    style={{ filter: 'grayscale(100%)' }} />
        </div>
        <div className="mx-auto mt-10 " >
          <Image height={70} width={70} alt="logo" src={logo} 
    style={{ filter: 'grayscale(100%)' }} />
        </div>
        <div className="mx-auto mt-10 " >
          <Image height={70} width={70} alt="logo" src={logo} 
    style={{ filter: 'grayscale(100%)' }} />
        </div>
        <div className="mx-auto mt-10 " >
          <Image height={70} width={70} alt="logo" src={logo} 
    style={{ filter: 'grayscale(100%)' }} />
        </div>
        <div className="mx-auto mt-10 " >
          <Image height={70} width={70} alt="logo" src={logo} 
    style={{ filter: 'grayscale(100%)' }} />
        </div>
        <div className="mx-auto mt-10 " >
          <Image height={70} width={70} alt="logo" src={logo} 
    style={{ filter: 'grayscale(100%)' }} />
        </div>
        <div className="mx-auto mt-10 " >
          <Image height={70} width={70} alt="logo" src={logo} 
    style={{ filter: 'grayscale(100%)' }} />
        </div>
      </div>
    </div>
  );
}

export default Client;
