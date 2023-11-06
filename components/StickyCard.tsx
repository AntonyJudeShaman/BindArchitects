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
  "#FF3F00",   // Darker shade
  "#00FF3E",   // Darker shade
  "#5733FF",   // Original color
  "#A888FF",   // Lighter shade
  "#2700FF",   // Darker shade
  "#33FFFF",   // Original color
  "#88FFFA",   // Lighter shade
  "#00FFFD",   // Darker shade
  "#FF33FF",   // Original color
  "#FFA8FF",   // Lighter shade
  "#FF00FF"    // Darker shade
];

const fontColors = [
  "#FFF",   
  "000",

];

function Card() {
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
  }, []);

  return (
    <div className="container w-full md:pt-10  mb-20" id="cards">
      {MenuItems?.map((project, index) => (
        <div
          className={`card pt-10 pb-10 w-full ${index % 5 !== 0 ? "mt-5" : ""}
          }`}
          key={project.projectNumber}
        >
          <Link href={`/projects/${project.projectPath}`}>
            <div
              style={{ backgroundColor: cardColors[index % cardColors.length], color: fontColors[index % fontColors.length]}}
              className=" mt-10 md:max-w-[90rem] mi0rem] w-full  border border-zinc-50 justify-center ml-0 md:ml-0 flex-col flex"
            >
              <div className="container text-wrapper md:pt-32 pt-12 pb-12 md:pl-12 md:pr-12 md:pb-20 flex flex-col gap-4 ">
                <p className="text-xl  ">{project.projectNumber}</p>
                <p
                  aria-label="Studio bind"
                  className="2xl:text-9xl dmsans-home mt-2 flex flex-wrap md:max-w-[98rem] z-30 text-6xl"
                >
                  {project.projectName}
                </p>
                <div className=" flex-row grid md:grid-cols-3 md:mt-16 mt-6 gap-6 inline-block grid-cols-1 ">
                        <p className="flex  flex-col max-w-[20rem] flex-wrap justify-center mt-8 leading-normal sm:leading-8">
                          <span className="font-semibold">Expertise</span>
                          {project.expertise}
                        </p>
                        <p className=" flex flex-col flex-wrap justify-center mt-8 leading-normal sm:leading-8">
                          <span className="font-semibold ">Sector</span>
                          {project.type}
                        </p>
                        <p className=" flex flex-col flex-wrap justify-center mt-8 leading-normal sm:leading-8">
                          <span className="font-semibold ">Location</span>
                          {project.location}
                        </p>
                      </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card;
