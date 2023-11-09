"use client"
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

interface CardProps {
  excludeProject: string | null | undefined;
}

const database = getDatabase(app);

const cardColors = [
  "linear-gradient(to right, #8A1C08, #FF8200)",
  "linear-gradient(to right, #1F1A4B, #6D6BFF)",
  "linear-gradient(to right, #0F5C41, #6DDBAA)",
  "linear-gradient(to right, #8E1927, #FF3E3E)",
  "linear-gradient(to right, #B28317, #FFB935)",
  "linear-gradient(to right, #3A0F94, #6143D2)",
  "linear-gradient(to right, #7E2900, #FF5A2D)",
  "linear-gradient(to right, #72001E, #FF2B1B)",
  "linear-gradient(to right, #004A47, #FF320F)",
  "linear-gradient(to right, #00122C, #6D6BFF)",
  "linear-gradient(to right, #2E2B7A, #3232A3)",
  "linear-gradient(to right, #793500, #FF8704)",
  "linear-gradient(to right, #005B49, #A5A5A5)",
  "linear-gradient(to right, #D6283E, #B3B3B3)",
  "linear-gradient(to right, #0F2DAA, #B3B3B3)",
];






const fontColors = [
  "#FFF",   
  "000",

];

function Card2({ excludeProject }: CardProps) {
  const [MenuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  const menuRef = ref(database, `Project/`);

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
                location: (value as { location: string | null | undefined }).location
            })
          );
          setMenuItems(menuData);
        }
      });
    };

    fetchMenuData();
  });

  return (
    <div className="container w-full md:pt-10  mb-4" id="cards">
      {MenuItems
        ?.filter((project) => project.projectNumber !== excludeProject)
        .map((project, index) => (
        <div
          className={`card pt-10 pb-10 w-full ${index % 5 !== 0 ? "mt-5" : ""}
          }`}
          key={project.projectNumber}
        >
          <Link href={`/projects/${project.projectPath}`}>
            <div
              style={{ background: cardColors[index % cardColors.length], color: fontColors[index % fontColors.length]}}
              className=" mt-10 md:max-w-[90rem] w-full  border border-zinc-50 justify-center ml-0 md:ml-0 flex-col flex"
            >
              <div className="container text-wrapper md:pt-32 pt-12 pb-12 md:pl-12 md:pr-12 md:pb-20 flex flex-col gap-4 ">
                <p className="text-xl  ">{project.projectNumber}</p>
                <p
                  aria-label="Studio bind"
                  className="md:text-9xl dmsans-home mt-2 flex flex-wrap md:max-w-[98rem] z-30 text-6xl"
                >
                  {project.projectName}
                </p>
                <div className="groupss md:mt-24 mt-10">
                    <div className="groupp dmsans md:gap-40 text-lg">
                      <p className="expertise  mb-5 dmsans-bold max-w-[20rem]">
                        Expertise <span className="dmsans">{project.expertise}</span>
                      </p>
                      <p className="sector  mb-5 dmsans-bold">
                        Sector <span className="dmsans">{project.type}</span>
                      </p>
                      <p className="location  mb-5 dmsans-bold">
                        Location <span className="dmsans">{project.location}</span>
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card2;
