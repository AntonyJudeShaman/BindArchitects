"use client";
import React, { CSSProperties, MouseEvent } from "react";
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
import image13 from "../assets/ccbm.png";
import image14 from "../assets/mga.png";
import image15 from "../assets/eastwest.png";
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
    setHoverStyle({ transform: "none" });
  };

  return (
    <div
      className="min-h-screen max-w-full py-8 mx-auto justify-center"
      data-theme=""
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-center w-full ">
        <Link
          href="/projects/delphiderma"
          style={{ filter: "brightness(130%)" }}
          aria-label="Delphi Derma Clinic 2023"
          className="overflow-hidden md:m-0 m-4 justify-center"
        >
          <div
            className="overflow-hidden "
          >
            <Image
              src={image9}
              alt="Delphi Derma Clinic"
              height={400}
              width={700}
              className="project-frame overflow-hidden transition-transform duration-1800 ease-in-out transform hover:scale-105"
              // onMouseMove={handleMouseMove6}
              // onMouseLeave={handleMouseLeave6}
              // style={hoverStyle6}
            />
          </div>
          <div
            className="flex flex-wrap text-lg mt-2"
          >
            <p className="flex-1 dmsans-bold text-left">Delphi Derma</p>
            <p className="flex-1 dmsans-bold text-right text-zinc-500">2023</p>
          </div>
        </Link>
        <Link
          href="/projects/remycinemas"
          style={{ filter: "brightness(130%)" }}
          aria-label="Remy Cinemas 2022"
          className="overflow-hidden md:m-0 m-4 justify-center"
        >
          <div className="overflow-hidden " >
            <Image
              src={image12}
              alt="Remy Cinemas"
              height={400}
              width={700}
              className="project-frame overflow-hidden transition-transform duration-1800 ease-in-out transform hover:scale-105"
              // onMouseMove={handleMouseMove10}
              // onMouseLeave={handleMouseLeave10}
              // style={hoverStyle10}
            />
          </div>
          <div
            className="flex flex-wrap text-lg mt-2"
          >
            <p className="flex-1 dmsans-bold text-left">Remy Cinemas</p>
            <p className="flex-1 dmsans-bold text-right text-zinc-500">2022</p>
          </div>
        </Link>
        <Link
          href="/projects/ccbm"
          className=" overflow-hidden md:m-0 m-4 "
          style={{ filter: "brightness(130%)" }}
          aria-label="CCBM 2022"
        >
          <div className=" overflow-hidden " aria-label="CCBM 2022">
            <Image
              src={image13}
              alt="CCBM"
              height={400}
              width={700}
              className="project-frame overflow-hidden transition-transform duration-1800 ease-in-out transform hover:scale-105"
              // onMouseMove={handleMouseMove11}
              // onMouseLeave={handleMouseLeave11}
              // style={hoverStyle11}
            />
          </div>
          <div className="flex flex-wrap text-lg mt-2">
            <p className="flex-1 dmsans-bold text-left">CCBM</p>
            <p className="flex-1 dmsans-bold text-right text-zinc-500">2022</p>
          </div>
        </Link>
        <Link
          href="/projects/mgasristi"
          className=" overflow-hidden md:m-0 m-4"
          style={{ filter: "brightness(130%)" }}
          aria-label="MGA Sristi 2022"
        >
          <div className=" overflow-hidden ">
            <Image
              src={image14}
              alt="MGA Sristi"
              height={400}
              width={700}
              className="project-frame overflow-hidden transition-transform duration-1800 ease-in-out transform hover:scale-105"
              // onMouseMove={handleMouseMove9}
              // onMouseLeave={handleMouseLeave9}
              // style={hoverStyle9}
            />
          </div>
          <div
            className="flex flex-wrap text-lg mt-2"
          >
            <p className="flex-1 dmsans-bold text-left">MGA Sristi</p>
            <p className="flex-1 dmsans-bold text-right text-zinc-500">2022</p>
          </div>
        </Link>
        <Link
          href="/projects/eastwest"
          className="overflow-hidden md:m-0 m-4 "
          style={{ filter: "brightness(130%)" }}
          aria-label="East West 2022"
        >
          <div className="overflow-hidden" >
            <Image
              src={image15}
              alt="East West"
              height={400}
              width={700}
              className="project-frame overflow-hidden transition-transform duration-1800 ease-in-out transform hover:scale-105"
              // onMouseMove={handleMouseMove8}
              // onMouseLeave={handleMouseLeave8}
              // style={hoverStyle8}
            />
          </div>
          <div
            className="flex flex-wrap text-lg mt-2"
          >
            <p className="flex-1 dmsans-bold text-left">East West</p>
            <p className="flex-1 dmsans-bold text-right text-zinc-500">2022</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
