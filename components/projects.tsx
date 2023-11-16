"use client";
import React, { CSSProperties, MouseEvent } from "react";
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
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref as reff,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "@/components/firebase";
import ProjectFound from "./project-found";


interface MenuItem {
  projectNumber: string | null | undefined;
  projectName: string | null | undefined;
  description: string | null | undefined;
  type: string | null | undefined;
  projectPath: string | null | undefined;
  expertise: string | null | undefined;
  location: string | null | undefined;
}

const firebaseApp = initializeApp(firebaseConfig, "Project");
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);


export function Projects() {

  
  const [images, setImages] = useState<string[]>([]);
  const [MenuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  const imagesRef = reff(storage, `Project/`);

  const menuRef = ref(database, `Project/`);

  
  useEffect(() => {
    const fetchMenuData = async () => {
      onValue(menuRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const menuData: MenuItem[] | null = Object.entries(data).map(
            ([key, value]) => ({
              id: key,
              projectNumber: (
                value as { projectNumber: string | null | undefined }
              ).projectNumber,
              projectName: (value as { projectName: string | null | undefined })
                .projectName,
              description: (value as { description: string | null | undefined })
                .description,
              type: (value as { type: string | null | undefined }).type,
              projectPath: (value as { projectPath: string | null | undefined })
                .projectPath,
              expertise: (value as { expertise: string | null | undefined })
                .expertise,
              location: (value as { location: string | null | undefined })
                .location,
            })
          );
          setMenuItems(menuData);
        }
      });
    };
    
    fetchMenuData();
  }, []);

  listAll(imagesRef)
    .then((res) => {
      const imagePromises = res.items.map((item) => getDownloadURL(item));
      Promise.all(imagePromises)
        .then((urls) => {
          setImages(urls as string[]);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });

    if (MenuItems === null) {
      return <ProjectFound />;
    }

  return (
    <div
      className="min-h-screen max-w-full py-8 mx-auto justify-center"
      data-theme=""
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-center w-full ">
        <Link
          href="/projects/delphiderma"
          style={{ filter: "brightness(130%)" }}
          className="overflow-hidden md:m-0 m-4 groupjustify-center"
        >
          <div className="overflow-hidden ">
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
          <div className="flex flex-wrap text-lg mt-2">
            <p
              className="flex-1 dmsans-semibold text-left text-orange-50"
              aria-label="Delphi Derma"
            >
              Delphi Derma
            </p>
            <p
              className="flex-1 dmsans text-right text-muted-foreground"
              aria-label="2023"
            >
              2023
            </p>
          </div>
        </Link>
        <Link
          href="/projects/remycinemas"
          style={{ filter: "brightness(130%)" }}
          className="overflow-hidden md:m-0 m-4 groupjustify-center"
        >
          <div className="overflow-hidden ">
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
          <div className="flex flex-wrap text-lg mt-2">
            <p
              className="flex-1 dmsans-semibold text-left text-orange-50"
              aria-label="Remy Cinemas"
            >
              Remy Cinemas
            </p>
            <p
              className="flex-1 dmsans text-right text-muted-foreground"
              aria-label="2022"
            >
              2022
            </p>
          </div>
        </Link>
        <Link
          href="/projects/ccbm"
          className=" overflow-hidden md:m-0 m-4 group"
          style={{ filter: "brightness(130%)" }}
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
            <p
              className="flex-1 dmsans-semibold text-left text-orange-50"
              aria-label="CCBM"
            >
              CCBM
            </p>
            <p
              className="flex-1 dmsans text-right text-muted-foreground"
              aria-label="2022"
            >
              2022
            </p>
          </div>
        </Link>
        <Link
          href="/projects/mgasristi"
          className=" overflow-hidden md:m-0 m-4 group"
          style={{ filter: "brightness(130%)" }}
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
          <div className="flex flex-wrap text-lg mt-2">
            <p
              className="flex-1 dmsans-semibold text-left text-orange-50"
              aria-label="MGA Sristi"
            >
              MGA Sristi
            </p>
            <p
              className="flex-1 dmsans text-right text-muted-foreground"
              aria-label="2022"
            >
              2022
            </p>
          </div>
        </Link>
        <Link
          href="/projects/eastwest"
          className="overflow-hidden md:m-0 m-4 group"
          style={{ filter: "brightness(130%)" }}
        >
          <div className="overflow-hidden">
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
          <div className="flex flex-wrap text-lg mt-2">
            <p
              className="flex-1 dmsans-semibold text-left text-orange-50"
              aria-label="East West"
            >
              East West
            </p>
            <p
              className="flex-1 dmsans text-right text-muted-foreground"
              aria-label="2022"
            >
              2022
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
