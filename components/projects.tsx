"use client";
import React, { CSSProperties, MouseEvent } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
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

  useEffect(() => {
    if (MenuItems) {
      const imagePaths = MenuItems.map(
        (project) => `Project/${project.projectPath}/`
      );
      const imagePromises = imagePaths.map((path) =>
        listAll(reff(storage, path)).then((res) => getDownloadURL(res.items[0]))
      );

      Promise.all(imagePromises)
        .then((urls) => {
          setImages(urls as string[]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [MenuItems]);

  if (MenuItems === null) {
    return <ProjectFound />;
  }

  
  return (
    <div
      className="min-h-screen max-w-screen bg-footer md:border border-gray-600 md:rounded-2xl md:-ml-12 md:-mr-12 py-8 mx-auto justify-center"
      data-theme=""
    >
      <h3 className="poppins mx-auto flex justify-center text-[2rem]">Take a look at some of our recent projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:p-12 p-0 justify-center w-full ">
        {MenuItems?.sort((a, b) =>
          (b.projectNumber || "").localeCompare(a.projectNumber || "")
        )
          .slice(0, 6)
          .map((project, index) => (
            <div className="flex flex-col" key={project.projectNumber}>
            <Link
              key={project.projectName}
              href={`/projects/${project.projectPath}`}
              style={{ filter: "brightness(105%)" }}
              className="overflow-hidden m-4 rounded-2xl group justify-center"
            >
              <div
                className="overflow-hidden border border-slate-600 rounded-2xl"
                style={{ height: "320px", width: "600px" }}
              >
                <Image
                  src={images[index]}
                  alt={project.projectName || ""}
                  height={320}
                  width={600}
                  style={{ height: "auto", width: "auto" }}
                  className="overflow-hidden rounded-2xl items-center object-center transform hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              
            </Link><div className="flex flex-wrap text-lg mt-2 m-4 2xl:mr-5">
                <p
                  className="flex-1 dmsans-semibold text-left text-orange-50"
                  aria-label={project.projectName || ""}
                >
                  {project.projectName}
                </p>
                <p
                  className="flex-1 dmsans text-right text-muted-foreground"
                  aria-label={project.projectNumber || ""}
                >
                  {project.projectNumber}
                </p>
              </div></div>
          ))}
      </div>
    </div>
  );
}
