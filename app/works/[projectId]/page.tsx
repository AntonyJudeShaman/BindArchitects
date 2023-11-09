"use client";
import {
  useState,
  useEffect,
  Suspense
} from "react";
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
import logo from "@/components/logo.png";

const firebaseApp = initializeApp(firebaseConfig, "Project");
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

const cardColors = [
  "#FF3F00", // Darker shade
  "#00FF3E", // Darker shade
  "#5733FF", // Original color
  "#A888FF", // Lighter shade
  "#2700FF", // Darker shade
  "#33FFFF", // Original color
  "#88FFFA", // Lighter shade
  "#00FFFD", // Darker shade
  "#FF33FF", // Original color
  "#FFA8FF", // Lighter shade
  "#FF00FF", // Darker shade
];

const metadata: Metadata = {
  title: "Project | Best Architects in Chennai | Studio Bind Architects",
  description: "Project details and description.",
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
  
  const [images, setImages] = useState<string[]>([]);
  const [MenuItems, setMenuItems] = useState<MenuItem[] | null>(null);

  const project = params.projectId;
  const selectedProjectName = params.projectId;
  const imagesRef = reff(storage, `Project/${project}/`);

  const menuRef = ref(database, `Project/`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="min-h-screen max-w-screen animate-fade-in mt-8 ">
      <Suspense
        fallback={
          <div className="text-center bg-gray-600">
            <h2 className="mx-auto dmsans-bold text-lg text-gray-200">
              Loading Project
            </h2>
          </div>
        }
      >
        {selectedProjectData && selectedProjectData.length > 0 ? (
          selectedProjectData.map((menuItem, index) => (
            <div
              key={menuItem.projectNumber}
              className="min-h-screen m-4 max-w-screen "
            >
              <Link
                href=""
                className="cursor-pointer"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="absolute md:left-8 left-4 top-8 text-white hover:text-orange-600 w-8 h-8" />
              </Link>
              <div className="flex  float-right justify-end md:mr-0 mr-4">
              <Link
                href="/"
                className="cursor-pointer"
              >
            <Image height={90} width={90} alt="logo" src={logo} />
            </Link>
          </div>
              <div className="min-h-screen">
                <title>{menuItem.projectName}</title>
                <div className="container min-h-screen text-wrapper p-4 flex flex-col gap-4">
                  <p className="text-xl md:mt-28 mt-10 dmsans">
                    {menuItem.projectNumber}
                  </p>
                  <p
                    aria-label="Studio bind"
                    className="projectName  dmsans-home title-gradient2 mt-2 flex flex-wrap max-w-[58rem] md:max-w-full z-30  title-gradient4"
                  >
                    {menuItem.projectName}
                  </p>
                  <div className="groupss md:mt-12 mt-5">
                    <div className="groupp dmsans md:gap-40 text-lg">
                      <p className="expertise md:mb-0 mb-5 dmsans-bold max-w-[20rem]">
                        Expertise{" "}
                        <span className="dmsans">{menuItem.expertise}</span>
                      </p>
                      <p className="sector md:mb-0 mb-5 dmsans-bold">
                        Sector <span className="dmsans">{menuItem.type}</span>
                      </p>
                      <p className="location md:mb-0 mb-5 dmsans-bold">
                        Location{" "}
                        <span className="dmsans">{menuItem.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="dmsans flex flex-col flex-wrap p-4 leading-[1.1] justify-center mt-8 sm:leading-8">
                  <span className="dmsans text-5xl mb-5">About</span>
                  <span className="text-lg">{menuItem.description}</span>
                </div>
                <div className="md:m-0 max-w-full">
                  <div className="mx-auto mt-20 flex max-w-[88rem] p-4 flex-col  text-center">
                    <h2 className="font-heading text-5xl text-left dmsans font-medium leading-[1.1]  md:text-5xl">
                      Gallery
                    </h2>
                  </div>
                  <div className="mb-20 max-w-full p-4 animate-fade-in mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-14 gap-8 justify-center w-full">
                    {images.map((url) => (
                      <div key={url} className="project-frame ">
                        <Image
                          height={400}
                          width={700}
                          src={url}
                          alt="uploaded"
                          style={{ filter: "brightness(110%)" }}
                        />
                      </div>
                    ))}
                  </div>
                  <Card2 excludeProject={menuItem.projectNumber} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <ProjectNotFound />
        )}
      </Suspense>
      <div className="hidden md:block"></div>
    </div>
  );
}
