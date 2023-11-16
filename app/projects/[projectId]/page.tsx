"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";
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
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import React from "react";
import ProjectNotFound from "@/components/project-notfound";
import Card2 from "@/components/StickyCard2";
import "@/styles/fonts.css";
import Tilt from "react-parallax-tilt";
import { MainNav } from "@/components/main-nav";
import { marketingConfig } from "config/marketing";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { ProjectFound } from "@/components/project-found";

const firebaseApp = initializeApp(firebaseConfig, "Project");
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

const imgStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -20,
};

const cardColors = [
  "linear-gradient(to bottom right, #209d86, #004f60)",
  "linear-gradient(to bottom right, #00004d, #0009d0)",
  "linear-gradient(to bottom right, #694b82, #af81a9)",
  "linear-gradient(to bottom right, #a5311f, #8c2c24)",
  "linear-gradient(to bottom right, #0d5f90, #004f60)",
  "linear-gradient(to bottom right, #5d793e, #738d6f)",
  "linear-gradient(to bottom right, #c8446a, #d97f81)",
  "linear-gradient(to bottom right, #8c0993, #2f4dbf)",
  "linear-gradient(to bottom right, #30407f, #a03d91)",
  "linear-gradient(to bottom right, #3f1e50, #ad4881)",
  "linear-gradient(to bottom right, #4c2495, #b282ab)",
  "linear-gradient(to bottom right, #a23e4f, #a8594d)",
  "linear-gradient(to bottom right, #0081b0, #003b7a)",
  "linear-gradient(to bottom right, #2d3f75, #1c2a5e)",
  "linear-gradient(to bottom right, #1e4c7b, #0d366b)",
  "linear-gradient(to bottom right, #363636, #606060)",
  "linear-gradient(to bottom right, #6a0572, #ab83a1)",
  "linear-gradient(to bottom right, #2e3b4e, #556f7a)",
  "linear-gradient(to bottom right, #0f700b, #00baff)",
  "linear-gradient(to bottom right, #0fabc0, #490057)",
  "linear-gradient(to bottom right, #000f99, #000ab0)",
  "linear-gradient(to bottom right, #f39c12, #e74c3c)",
  "linear-gradient(to bottom right, #74b9ff, #0984e3)",
  "linear-gradient(to bottom right, #990FDA, #990F00)  ",
  "linear-gradient(to bottom right, #3498db, #2980b9)",
  "linear-gradient(to bottom right, #f368e0, #ff9ff3)",
  "linear-gradient(to bottom right, #576574, #3d3d3d)",
  "linear-gradient(to bottom right, #eb4d4b, #b71540)",
  "linear-gradient(to bottom right, #45aaf2, #2e86de)",
  "linear-gradient(to bottom right, #686de0, #4834d4)",
  "linear-gradient(to bottom right, #fd79a8, #d63031)",
  "linear-gradient(to bottom right, #ff6b81, #ff4757)",
  "linear-gradient(to bottom right, #6a0572, #fd79a8)",
  "linear-gradient(to bottom right, #a55eea, #8854d0)",
  "linear-gradient(to bottom right, #16a085, #2ecc71)",
];

const metadata: Metadata = {
  title: "Project | Best Architects in Chennai | Studio Bind Architects",
  description: "Project details and description.",
};

const fallbackStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "black",
};

interface MenuItem {
  projectNumber: string | null | undefined;
  projectName: string | null | undefined;
  description: string | null | undefined;
  type: string | null | undefined;
  projectPath: string | null | undefined;
  expertise: string | null | undefined;
  location: string | null | undefined;
}

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [images, setImages] = useState<string[]>([]);
  const [MenuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  const project = params.projectId;
  const selectedProjectName = params.projectId;
  const imagesRef = reff(storage, `Project/${project}/`);

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

  const selectedProjectData =
    Array.isArray(MenuItems) && MenuItems.length > 0
      ? MenuItems.filter((item) => item.projectPath === selectedProjectName)
      : [];

  const mapProjectNumberToColorIndex = (projectNumber: any) => {
    const projectNumberAsNumber = parseInt(projectNumber, 10);
    return isNaN(projectNumberAsNumber)
      ? 0
      : (projectNumberAsNumber - 1 + cardColors.length) % cardColors.length;
  };

  function getFontColor(background: string) {
    const rgb = background.match(/\d+/g);
    if (!rgb) return "#FFF";

    const luminance =
      (0.299 * parseInt(rgb[0]) +
        0.587 * parseInt(rgb[1]) +
        0.114 * parseInt(rgb[2])) /
      255;

    if (luminance > 0.8) return "#17202A";
    else if (luminance > 0.75) return "#191970";
    else if (luminance > 0.7) return "#000080";
    else if (luminance > 0.65) return "#483D8B";
    else if (luminance > 0.6) return "#8900DB";
    else if (luminance > 0.55) return "#9370DB";
    else if (luminance > 0.5) return "#6A5ACD";
    else if (luminance > 0.45) return "#9932CC";
    else if (luminance > 0.4) return "#FFF";
    else if (luminance > 0.35) return "#FFD700";
    else if (luminance > 0.3) return "#FF8C00";
    else if (luminance > 0.25) return "#D26900";
    else if (luminance > 0.2) return "#ff4500";
    else if (luminance > 0.15) return "#40E0D0";
    else if (luminance > 0.1) return "#008B8B";
    else if (luminance > 0.05) return "#DF4FFF";
    else if (luminance > 0.03) return "#fe3268";
    else if (luminance > 0.01) return "#0fbe00";
    else return "#cb371a";
  }

  if (MenuItems === null) {
    return <ProjectFound />;
  }

  if (selectedProjectData.length === 0) {
    return <ProjectNotFound />;
  }

  return (
    <div className="max-w-screen">
      <Suspense fallback={<div style={fallbackStyle}>Please wait...</div>}>
        {selectedProjectData && selectedProjectData.length > 0 ? (
          selectedProjectData
            ?.sort((a, b) =>
              (a.projectNumber || "").localeCompare(b.projectNumber || "")
            )
            .map((menuItem) => (
              <div
                className="min-h-screen md:-ml-32 md:-mr-32 max-w-screen  "
                key={menuItem.projectNumber}
              >
                <div className="min-h-screen max-w-screen ">
                  <Link
                    href=""
                    className="cursor-pointer"
                    onClick={() => window.history.back()}
                  >
                    <ArrowLeft
                      className="absolute md:left-8 left-4 top-8  hover:text-orange-600 w-8 h-8"
                      style={{
                        color: getFontColor(
                          cardColors[
                            mapProjectNumberToColorIndex(menuItem.projectNumber)
                          ]
                        ),
                      }}
                    />
                  </Link>
                  <div className="flex flex-row mr-5 absolute md:right-8 right-4 top-8 bg-transparent">
                    <p
                      className="logo-font md:block hidden  ml-5 md:ml-0 flex-1 text-4xl"
                      aria-label="BIND"
                      style={{
                        color: getFontColor(
                          cardColors[
                            mapProjectNumberToColorIndex(menuItem.projectNumber)
                          ]
                        ),
                      }}
                    >
                      BIND
                    </p>
                    <p
                      className="logo-font md:hidden ml-5 md:ml-0 flex-1 text-4xl"
                      aria-label="BIND"
                      style={{
                        color: getFontColor(
                          cardColors[
                            mapProjectNumberToColorIndex(menuItem.projectNumber)
                          ]
                        ),
                      }}
                    >
                      BIND
                    </p>
                  </div>
                  <div className="min-h-screen max-w-screen">
                    <title>{menuItem.projectName}</title>

                    <div
                      className="p-8 md:p-4 justify-center min-h-screen text-wrapper  flex flex-col gap-4"
                      style={{
                        background:
                          cardColors[
                            mapProjectNumberToColorIndex(menuItem.projectNumber)
                          ],
                        color: getFontColor(
                          cardColors[
                            mapProjectNumberToColorIndex(menuItem.projectNumber)
                          ]
                        ),
                      }}
                    >
                      {" "}
                      <p className="text-xl dmsans md:ml-32">
                        {menuItem.projectNumber}
                      </p>
                      <p
                        aria-label="Studio bind"
                        className="projectName md:ml-32 dmsans-home mt-2 flex flex-wrap md:max-w-full z-30"
                      >
                        {menuItem.projectName}
                      </p>
                      <div className="groupss md:mt-20 mt-5 md:ml-32">
                        <div className="groupp dmsans md:gap-40 text-lg">
                          <p className="expertise md:mb-0 mb-5 dmsans-bold ">
                            Expertise{" "}
                            <span className="dmsans">{menuItem.expertise}</span>
                          </p>
                          <p className="sector md:mb-0 mb-5 dmsans-bold">
                            Sector{" "}
                            <span className="dmsans">{menuItem.type}</span>
                          </p>
                          <p className="location md:mb-0 mb-5 dmsans-bold">
                            Location{" "}
                            <span className="dmsans">{menuItem.location}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" bg-gray-900 max-w-screen">
                      <div className="dmsans min-h-screen flex flex-col mx-auto max-w-[60rem] flex-wrap leading-loose justify-center sm:leading-8">
                        {/* <span className="dmsans text-5xl mb-5">About</span> */}
                        <span className="md:text-4xl md:p-0 p-8 text-2xl leading-loose">
                          {menuItem.description}
                        </span>
                      </div>
                    </div>
                    <div className="md:m-0  mx-auto">
                      <div className="mx-auto mt-20 flex max-w-[88rem] p-4 md:p-8 flex-col  text-center">
                        <h2 className="font-heading text-6xl text-left dmsans font-medium leading-[1.1]  md:text-7xl">
                          Gallery
                        </h2>
                      </div>
                      <div className="mb-20 md:max-w-[90rem] p-8  mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-14 gap-8 justify-center w-full">
                        {images.map((url) => (
                          <div
                            key={url}
                            className="project-frame overflow-hidden"
                          >
                            <Image
                              height={400}
                              width={700}
                              src={url}
                              alt="uploaded"
                              className="overflow-hidden transition-transform duration-1800 ease-in-out transform hover:scale-105"
                              style={{ filter: "brightness(110%)" }}
                            />
                          </div>
                        ))}
                      </div>
                      <Card2 excludeProject={menuItem.projectNumber} />
                    </div>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <ProjectFound />
        )}
      </Suspense>
    </div>
  );
}
