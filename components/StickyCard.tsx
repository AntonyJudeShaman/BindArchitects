"use client";
import React from "react";
import "@/styles/card.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { app } from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import ProjectFound from "./project-found";

interface MenuItem {
  projectNumber: string | null | undefined;
  projectName: string | null | undefined;
  description: string | null | undefined;
  type: string | null | undefined;
  projectPath: string | null | undefined;
  projectYear: string | null | undefined;
  expertise: string | null | undefined;
  location: string | null | undefined;
}

const database = getDatabase(app);

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

function Card() {
  const [MenuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  const menuRef = ref(database, `Project/`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              projectYear: (value as { projectYear: string | null | undefined })
                .projectYear,
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

  if (MenuItems === null) {
    return (
      <div className="bg-tranparent flex flex-row mx-auto mt-24 align-middle justify-center items-center p-8 rounded shadow-lg text-center">
        <p className="text-2xl justify-center flex dmsans-bold">
          Loading please wait &nbsp;&nbsp;
        </p>
        <div className=" justify-center items-center">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 border-t-blue-500 h-12 w-12"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-row max-w-screen">
      {" "}
      <div className="fixed overflow- mt-12 ml-2 m-h-screen hidden md:block">
        {MenuItems?.sort((a, b) =>
          (b.projectNumber || "").localeCompare(a.projectNumber || "")
        ).map((project, index) => (
          <Link
            href={`/projects/${project.projectPath}`}
            key={project.projectNumber}
          >
            <div className="flex sticky project-side md:-ml-32 top-0 items-center">
              <div className="relative flex items-center">
                <span className="w-6 border-t border-zinc-700 project-side" />
              </div>
              <span
                className="ml-2 mb-1 hover:text-teal-400 text-zinc-600 dmsans-semibold  hover:scale-110 hover:duration-300"
                aria-label={project.projectName || ""}
              >
                {project.projectName}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="container flex-1  max-w-full md:pt-10  mb-20" id="cards">
        {MenuItems?.sort((a, b) =>
          (b.projectNumber || "").localeCompare(a.projectNumber || "")
        ).map((project, index) => (
          <div
            className={`card pt-10 pb-10 w-full ${index % 0 !== 0 ? "mt-5" : ""}
          }`}
            key={project.projectNumber}
          >
            <Link
              aria-label={project.projectPath || ""}
              href={`/projects/${project.projectPath}`}
            >
              <div
                style={{
                  background:
                    cardColors[
                      mapProjectNumberToColorIndex(project.projectNumber)
                    ],
                  color: getFontColor(
                    cardColors[
                      mapProjectNumberToColorIndex(project.projectNumber)
                    ]
                  ),
                }}
                className=" mt-10 md:max-w-[90rem] w-full rounded-md justify-center ml-0 md:ml-6 flex-col flex"
              >
                <div className="container text-wrapper md:pt-32 pt-12 pb-12 md:pl-12 md:pr-12 md:pb-20 flex flex-col gap-4 ">
                  <p
                    className="text-xl"
                    aria-label={project.projectNumber || ""}
                  >
                    {project.projectNumber}
                  </p>
                  <p
                    aria-label={project.projectName || ""}
                    className="md:text-9xl dmsans-home mt-2 flex flex-wrap md:max-w-[98rem] z-30 text-6xl"
                  >
                    {project.projectName}
                  </p>
                  <div className="groupss md:mt-24 mt-10">
                    <div className="groupp dmsans md:gap-40 text-lg">
                      <p
                        className="expertise  mb-5 dmsans-bold "
                        aria-label={project.expertise || ""}
                      >
                        Expertise{" "}
                        <span className="dmsans">{project.expertise}</span>
                      </p>
                      <p
                        className="sector  mb-5 dmsans-bold"
                        aria-label={project.type || ""}
                      >
                        Sector <span className="dmsans">{project.type}</span>
                      </p>
                      <p
                        className="location  mb-5 dmsans-bold mr-3"
                        aria-label={project.location || ""}
                      >
                        Location{" "}
                        <span className="dmsans">{project.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
