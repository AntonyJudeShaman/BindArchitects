"use client";
import React, { CSSProperties,MouseEvent } from "react";
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
import { useState, useEffect } from "react";

export function Projects() {
  const [hoverStyle, setHoverStyle] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle1, setHoverStyle1] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle2, setHoverStyle2] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle3, setHoverStyle3] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle4, setHoverStyle4] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle5, setHoverStyle5] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle6, setHoverStyle6] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle7, setHoverStyle7] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle8, setHoverStyle8] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle9, setHoverStyle9] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle10, setHoverStyle10] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle11, setHoverStyle11] = useState({
    transform: "translate(0, 0)",
  });
  const [hoverStyle12, setHoverStyle12] = useState({
    transform: "translate(0, 0)",
  });

  const handleMouseMove = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseLeave = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  const handleMouseMove1 = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle1({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseLeave1 = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  const handleMouseMove2 = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle2({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseLeave2 = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  const handleMouseMove3 = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle3({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseLeave3 = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  const handleMouseMove4 = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle4({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseLeave4 = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  const handleMouseMove5 = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle5({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseLeave5 = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  const handleMouseMove6 = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle6({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseLeave6 = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  const handleMouseMove7 = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle7({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseLeave7 = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  const handleMouseMove8 = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle8({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseLeave8 = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  const handleMouseMove9 = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle9({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseLeave9 = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  const handleMouseMove10 = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle10({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseMove11 = (e: MouseEvent) => {
    const container = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - container.left;
    const y = e.clientY - container.top;

    const centerX = container.width / 2;
    const centerY = container.height / 2;

    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 3;

    setHoverStyle11({
      transform: `translate(${moveX}px, ${moveY}px)`,
    });
  };

  const handleMouseLeave11 = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  const handleMouseLeave10 = () => {
    setHoverStyle({ transform: "translate(0, 0)" });
  };

  return (
    <div className="min-h-screen animate-fade-in py-8 " data-theme="">
      <div className="flex flex-wrap gap-2 w-full ">
        <Link
          href="#"
          style={{ filter: "brightness(120%)", width: "490px" }}
          className=""
          aria-label="Projects Section"
        >
          <div className="  mx-auto md:m-0 p-4 overflow-hidden justify-center  mb-10">
            <img
              src={image1.src}
              alt="ykck"
              height={520}
              width={520}
              className="project-frame overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={hoverStyle}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">YKCK</p>
              <p className="flex-1 font-heading text-right text-zinc-500">
                2023
              </p>
            </div>
          </div>
        </Link>
        <Link href="#" aria-label="Projects Section">
          <div
            className="overflow-hidden md:m-0 m-4  md:ml-28 md:mt-20  mb-10"
            style={{ filter: "brightness(120%)" }}
          >
            <Image
              src={image2}
              alt="terraceman"
              height={520}
              width={520}
              className="project-frame overflow-hidden"
               onMouseMove={handleMouseMove1}
              onMouseLeave={handleMouseLeave1}
              style={hoverStyle1}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">Terrace Man Cave</p>
              <p className="flex-1 font-heading text-right text-zinc-500">
                2021
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="#"
          style={{ filter: "brightness(140%)", width: "400px" }}
          aria-label="Projects Section"
        >
          <div className="  md:ml-80 md:m-0 m-4 overflow-hidden  mb-10">
            <Image
              src={image3}
              alt="Moksha Bar"
              height={420}
              width={420}
              className="project-frame overflow-hidden"
              onMouseMove={handleMouseMove2}
              onMouseLeave={handleMouseLeave2}
              style={hoverStyle2}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left ">Moksha Bar</p>
              <p className="flex-1 font-heading text-right  text-zinc-500">
                2022
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 w-full mx-auto overflow-hidden justify-center align-center">
        <Link href="#" aria-label="Projects Section">
          <div
            className="overflow-hidden md:m-0 p-4 mx-auto md:mt-20  mb-10 w-full"
            style={{ filter: "brightness(120%)"}}
          >
            <Image
              src={image4}
              alt="sports one"
              height={820}
              width={820}
              className="project-frame overflow-hidden mx-auto "
              onMouseMove={handleMouseMove3}
              onMouseLeave={handleMouseLeave3}
              style={hoverStyle3}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">Sports One</p>
              <p className="flex-1 font-heading text-right text-zinc-500">
                2022
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2  overflow-hidden">
        <Link
          href="#"
          style={{ filter: "brightness(140%)" }}
          aria-label="Projects Section"
        >
          <div className="  md:ml-40 md:m-0 m-4 overflow-hidden  mb-10">
            <Image
              src={image5}
              alt="Grand Entrance"
              height={420}
              width={420}
              className="project-frame overflow-hidden"
              onMouseMove={handleMouseMove4}
              onMouseLeave={handleMouseLeave4}
              style={hoverStyle4}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left ">Grand Entrance</p>
              <p className="flex-1 font-heading text-right text-zinc-500">
                2022
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="#"
          style={{ filter: "brightness(140%)" }}
          aria-label="Projects Section"
        >
          <div className="overflow-hidden md:m-0 m-4 md:ml-16 md:mt-60   mb-10">
            <Image
              src={image6}
              alt="Casa Grand"
              height={420}
              width={490}
              className="project-frame overflow-hidden"
              onMouseMove={handleMouseMove5}
              onMouseLeave={handleMouseLeave5}
              style={hoverStyle5}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="font-heading text-left ">Casa Grande- Luxury Interior</p>
              <p className="flex-1 font-heading text-right text-zinc-500">
                2022
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 justify-end w-full ">
        <Link
          href="#"
          style={{ filter: "brightness(140%)" }}
          aria-label="Projects Section"
        >
          <div className="overflow-hidden md:m-0 m-4  mb-10 md:mr-36">
            <Image
              src={image7}
              alt="Casa Grand Budget Interior"
              height={420}
              width={420}
              className="project-frame overflow-hidden"
              onMouseMove={handleMouseMove6}
              onMouseLeave={handleMouseLeave6}
              style={hoverStyle6}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className=" text-left">Casa Grand - Budget Interior</p>
              <p className="flex-1 font-heading text-right text-zinc-500">
                2022
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 justify-start w-full ">
        <Link
          href="#"
          style={{ filter: "brightness(90%)" }}
          aria-label="Projects Section"
        >
          <div className=" overflow-hidden mb-10 md:m-0 m-4 md:-mt-40">
            <Image
              src={image8}
              alt="Visore Opticals"
              height={680}
              width={680}
              className="project-frame overflow-hidden"
              onMouseMove={handleMouseMove7}
              onMouseLeave={handleMouseLeave7}
              style={hoverStyle7}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">Visore Opticals</p>
              <p className="flex-1 font-heading text-right text-zinc-500">
                2023
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 justify-end w-full ">
        <Link
          href="#"
          style={{ filter: "brightness(115%)" }}
          aria-label="Projects Section"
        >
          <div className=" overflow-hidden mb-10 md:m-0 m-4 md:mt-1 md:mr-28 justify-end">
            <Image
              src={image9}
              alt="Casa Grand Budget Interior"
              height={680}
              width={680}
              className="project-frame overflow-hidden"
              onMouseMove={handleMouseMove8}
              onMouseLeave={handleMouseLeave8}
              style={hoverStyle8}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">
                Delphi Derma Clinic
              </p>
              <p className="flex-1 font-heading text-right text-zinc-500">
                2023
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 justify-start w-full ">
        <Link
          href="#"
          style={{ filter: "brightness(130%)" }}
          aria-label="Projects Section"
        >
          <div className="  mb-10 overflow-hidden md:m-0 m-4 md:mt-1 md:ml-80 ">
            <Image
              src={image10}
              alt="Casa Grand Budget Interior"
              height={380}
              width={380}
              className="project-frame overflow-hidden"
              onMouseMove={handleMouseMove9}
              onMouseLeave={handleMouseLeave9}
              style={hoverStyle9}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">AR Rahman Cafe</p>
              <p className="flex-1 font-heading text-right text-zinc-500">
                2021
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 justify-end w-full ">
        <Link
          href="#"
          style={{ filter: "brightness(130%)" }}
          aria-label="Projects Section"
        >
          <div className="overflow-hidden md:m-0 m-4  mb-10  md:mt-28 md:mr-60">
            <Image
              src={image12}
              alt="Casa Grand Budget Interior"
              height={380}
              width={380}
              className="project-frame overflow-hidden"
              onMouseMove={handleMouseMove10}
              onMouseLeave={handleMouseLeave10}
              style={hoverStyle10}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">DUPLEX RESIDENCE</p>
              <p className="flex-1 font-heading text-right text-zinc-500">
                2022
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="#"
          style={{ filter: "brightness(130%)" }}
          aria-label="Projects Section"
        >
          <div className=" overflow-hidden md:m-0 m-4 mb-10  md:mt-1 md:mr-60 ">
            <Image
              src={image11}
              alt="Casa Grand Budget Interior"
              height={420}
              width={420}
              className="project-frame overflow-hidden"
              onMouseMove={handleMouseMove11}
              onMouseLeave={handleMouseLeave11}
              style={hoverStyle11}
            />
            <div className="flex flex-wrap text-lg mt-2">
              <p className="flex-1 font-heading text-left">DUPLEX RESIDENCE</p>
              <p className="flex-1 font-heading text-right text-zinc-500">
                2022
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
