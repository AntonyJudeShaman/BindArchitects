"use client";
import React, { CSSProperties, MouseEvent } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic'
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
      className="min-h-screen max-w-screen py-8 mx-auto justify-center"
      data-theme=""
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center w-full ">
        {MenuItems?.sort((a, b) =>
          (b.projectNumber || "").localeCompare(a.projectNumber || "")
        ).map((project, index) => (
          <Link
            key={project.projectName}
            href={`/projects/${project.projectPath}`}
            style={{ filter: "brightness(130%)" }}
            className="overflow-hidden md:m-0 m-4 group justify-center"
          >
            <div
              className="overflow-hidden"
              style={{ height: "320px", width: "600px" }}
            >
              <Image
                src={images[index]}
                alt={project.projectName || ""}
                height={350}
                width={600}
                style={{ height: "auto", width: "auto" }}
                className="project-frame overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            <div className="flex flex-wrap text-lg mt-2 2xl:mr-5">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
