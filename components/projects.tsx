import React from "react";
import { SiteFooter } from "./site-footer";
import Link from "next/link";
import image1 from "../assets/ykck.png";
import image2 from "../assets/terraceman.png";
import image3 from "../assets/mokshabar.png";
import image4 from "../assets/sportsone.png";
import image5 from "../assets/grandentrance.png";
import image6 from "../assets/casagrande.png";
import image7 from "../assets/casabudget.png";
import image8 from "../assets/visore.png";
import image9 from "../assets/delphi.png";
import image10 from "../assets/arrahman.png";
import image11 from "../assets/residence.png";
import image12 from "../assets/remy.png";
import Image from "next/image";

export function Projects() {
  return (
    <div className="min-h-screen animate-fade-in py-8 " data-theme="">
      <div className="flex flex-wrap gap-2 w-full">
        <Link href="" style={{ filter: "brightness(120%)" }} aria-label="Projects Section">
          <div className=" max-w-[40rem] mx-auto justify-center p-4 mb-10">
            <Image
              src={image1}
              alt="ykck"
              height={520}
              width={520}
              className="shadow-box project-frame rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">YKCK</p>
              <p className="flex-1 font-heading text-right text-zinc-500">2023</p>
            </div>
          </div>
        </Link>
        <Link href="" aria-label="Projects Section">
          <div
            className=" max-w-[40rem] md:ml-28 md:mt-20 m-4 mb-10"
            style={{ filter: "brightness(120%)" }}
          >
            <Image
              src={image2}
              alt="terraceman"
              height={520}
              width={520}
              className="shadow-box project-frame rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">Terrace Man Cave</p>
              <p className="flex-1 font-heading text-right text-zinc-500">2021</p>
            </div>
          </div>
        </Link>
        <Link href="" style={{ filter: "brightness(140%)" }} aria-label="Projects Section">
          <div className=" max-w-[40rem] md:ml-80  m-4 mb-10">
            <Image
              src={image3}
              alt="Moksha Bar"
              height={420}
              width={420}
              className="shadow-box project-frame rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left ">Moksha Bar</p>
              <p className="flex-1 font-heading text-right  text-zinc-500">2022</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 w-full mx-auto justify-center align-center">
        <Link href="" aria-label="Projects Section">
          <div
            className="  mx-auto md:mt-20 p-4 mb-10 w-full"
            style={{ filter: "brightness(120%)" }}
          >
            <Image
              src={image4}
              alt="sports one"
              height={820}
              width={820}
              className="shadow-box project-frame mx-auto rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">Sports One</p>
              <p className="flex-1 font-heading text-right text-zinc-500">2022</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2  ">
        <Link href="" style={{ filter: "brightness(140%)" }} aria-label="Projects Section">
          <div className=" max-w-[40rem] md:ml-40  m-4 mb-10">
            <Image
              src={image5}
              alt="Grand Entrance"
              height={420}
              width={420}
              className="shadow-box project-frame rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left ">Grand Entrance</p>
              <p className="flex-1 font-heading text-right text-zinc-500">2022</p>
            </div>
          </div>
        </Link>
        <Link href="" style={{ filter: "brightness(140%)" }} aria-label="Projects Section">
          <div className=" max-w-[40rem] md:ml-16 md:mt-60  m-4 mb-10">
            <Image
              src={image6}
              alt="Casa Grand"
              height={420}
              width={490}
              className="shadow-box project-frame rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className=" text-left ">Casa Grande- Luxury Interior</p>
              <p className="flex-1 font-heading text-right text-zinc-500">2022</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 justify-end w-full ">
        <Link href="" style={{ filter: "brightness(140%)" }} aria-label="Projects Section">
          <div className="max-w-[40rem] m-4 mb-10 md:mr-36">
            <Image
              src={image7}
              alt="Casa Grand Budget Interior"
              height={420}
              width={420}
              className="shadow-box project-frame rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className=" text-left">Casa Grand - Budget Interior</p>
              <p className="flex-1 font-heading text-right text-zinc-500">2022</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 justify-start w-full ">
        <Link href="" style={{ filter: "brightness(90%)" }} aria-label="Projects Section">
          <div className="max-w-[40rem] m-4 mb-10  md:-mt-40">
            <Image
              src={image8}
              alt="Visore Opticals"
              height={680}
              width={680}
              className="shadow-box project-frame rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">Visore Opticals</p>
              <p className="flex-1 font-heading text-right text-zinc-500">2023</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 justify-end w-full ">
        <Link href="" style={{ filter: "brightness(115%)" }} aria-label="Projects Section">
          <div className="max-w-[40rem] m-4 mb-10  md:mt-1 md:mr-28 justify-end">
            <Image
              src={image9}
              alt="Casa Grand Budget Interior"
              height={680}
              width={680}
              className="shadow-box project-frame rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">Delphi Derma Clinic</p>
              <p className="flex-1 font-heading text-right text-zinc-500">2023</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 justify-start w-full ">
        <Link href="" style={{ filter: "brightness(130%)" }} aria-label="Projects Section">
          <div className="max-w-[40rem] m-4 mb-10  md:mt-1 md:ml-80 ">
            <Image
              src={image10}
              alt="Casa Grand Budget Interior"
              height={380}
              width={380}
              className="shadow-box project-frame rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">AR Rahman Cafe</p>
              <p className="flex-1 font-heading text-right text-zinc-500">2021</p>
            </div>
          </div>
        </Link>
        
      </div>
      <div className="flex flex-wrap gap-2 justify-end w-full ">
      <Link href="" style={{ filter: "brightness(130%)" }} aria-label="Projects Section">
          <div className="max-w-[40rem] m-4 mb-10  md:mt-28 md:mr-60">
            <Image
              src={image12}
              alt="Casa Grand Budget Interior"
              height={380}
              width={380}
              className="shadow-box project-frame rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">DUPLEX RESIDENCE</p>
              <p className="flex-1 font-heading text-right text-zinc-500">2022</p>
            </div>
          </div>
        </Link>
      <Link href="" style={{ filter: "brightness(130%)" }} aria-label="Projects Section">
          <div className="max-w-[40rem] m-4 mb-10  md:mt-1 md:mr-60 ">
            <Image
              src={image11}
              alt="Casa Grand Budget Interior"
              height={420}
              width={420}
              className="shadow-box project-frame rounded-xl"
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">DUPLEX RESIDENCE</p>
              <p className="flex-1 font-heading text-right text-zinc-500">2022</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
