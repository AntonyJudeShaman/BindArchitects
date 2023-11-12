"use client";
import React from "react";
import "@/styles/card.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { app } from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";

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
  "linear-gradient(to right, #2e5d86, #4b4f6d)",
  "linear-gradient(to right, #a13c4d, #a33f61)",
  "linear-gradient(to right, #694b82, #af81a9)",
  "linear-gradient(to right, #a5311f, #8c2c24)",
  "linear-gradient(to right, #7a5a6e, #d6aac3)",
  "linear-gradient(to right, #5d793e, #738d6f)",
  "linear-gradient(to right, #c8446a, #d97f81)",
  "linear-gradient(to right, #8c0993, #2f4dbf)",
  "linear-gradient(to right, #30407f, #a03d91)",
  "linear-gradient(to right, #3f1e50, #ad4881)",
  "linear-gradient(to right, #4c2495, #b282ab)",
  "linear-gradient(to right, #a23e4f, #a8594d)",
  "linear-gradient(to right, #0081b0, #003b7a)",
  "linear-gradient(to right, #2d3f75, #1c2a5e)",
  "linear-gradient(to right, #1e4c7b, #0d366b)",
];

const fontColors = ["#FFF", "000"];

function Card() {
  const [MenuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  const menuRef = ref(database, `Project/`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchMenuData = async () => {
      onValue(menuRef, (snapshot) => {
        const data = snapshot.val();
        console.log("Data fetched:", data);
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

  const mapProjectNumberToColorIndex = (projectNumber: any) => {
    const projectNumberAsNumber = parseInt(projectNumber, 10);
    return isNaN(projectNumberAsNumber)
      ? 0
      : (projectNumberAsNumber - 1 + cardColors.length) % cardColors.length;
  };

  return (
    <div className="flex-row max-w-screen">
      {" "}
      <div className="fixed mt-28 ml-2 hidden md:block">
        {MenuItems?.sort((a, b) =>
          (a.projectNumber || "").localeCompare(b.projectNumber || "")
        ).map((project, index) => (
          <Link
            href={`/projects/${project.projectPath}`}
            key={project.projectNumber}
          >
            <div className="flex sticky md:-ml-32 top-0 items-center">
              <div className="relative flex items-center">
                <span className="w-10 border-t" />
              </div>
              <span className="ml-2 hover:text-orange-600 hover:scale-110 hover:duration-300">
                {project.projectName}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="container flex-1 max-w-full md:pt-10  mb-20" id="cards">
        {MenuItems?.sort((a, b) =>
          (a.projectNumber || "").localeCompare(b.projectNumber || "")
        ).map((project, index) => (
          <div
            className={`card pt-10 pb-10 w-full ${index % 5 !== 0 ? "mt-5" : ""}
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
                }}
                className=" mt-10 md:max-w-[90rem] w-full  border border-zinc-50 justify-center ml-0 md:ml-0 flex-col flex"
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
