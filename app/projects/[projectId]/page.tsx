"use client";
import {
  useState,
  useEffect,
  Suspense,
  ReactElement,
  ReactPortal,
  ReactNode,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { app } from "@/components/firebase";
import { HomePage, marketingConfig } from "config/marketing";
import { MainNav } from "@/components/main-nav";
import Head from "next/head";
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
import toast from "react-hot-toast";
import { firebaseConfig } from "@/components/firebase";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";

const firebaseApp = initializeApp(firebaseConfig, "Project");
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

interface MenuItem {
  projectNumber: string | null | undefined;
  projectName:
    | string
    | ReactElement
    | ReactPortal
    | ReactNode
    | null
    | undefined;
  description:
    | string
    | ReactElement
    | ReactPortal
    | ReactNode
    | null
    | undefined;
  type: string | null | undefined;
  projectPath: string | null | undefined;
}

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const metadata: Metadata = {
    title: `${params.projectId}`,
    description: "Project details and description.",
  };
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
    <div className="min-h-screen max-w-full animate-fade-in mt-8">
      <Head>
        <title>{params.projectId} | Studio Bind</title>
      </Head>
      <div className="ml-5  flex mb-10 md:justify-between">
        <MainNav items={HomePage.mainNav} />
        <nav className="justify-between">
          {marketingConfig &&
            marketingConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                aria-label="navbar items"
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "group flex flex-col text-right items-center overflow-hidden my-font hidden mr-4 title-gradient md:inline-block rounded-md p-2 text-sm font-medium hover-underline",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                <span className="">{item.title}</span>
              </Link>
            ))}
        </nav>
      </div>
      <Suspense
        fallback={
          <div className="text-center bg-gray-600">
            <h2 className="mx-auto font-semibold text-lg text-gray-200">
              Loading Project
            </h2>
          </div>
        }
      >
        {selectedProjectData ? (
          <div className="min-h-screen">
            <Head>
              <title>{params.projectId} || Studio Bind</title>
            </Head>
            {selectedProjectData ? (
              <div className="min-h-screen">
                {selectedProjectData.map((menuItem, index) => (
                  <div
                    key={menuItem.projectNumber || index}
                    className="mx-auto ml-5 justify-center items-center"
                  >
                    <div className="container  min-h-screen text-wrapper p-4 flex flex-col gap-4 ">
                      <p className="text-xl mt-28 ">{menuItem.projectNumber}</p>
                      <p
                        aria-label="Studio bind"
                        className="2xl:text-9xl dmsans-home title-gradient2 mt-2 flex flex-wrap md:max-w-[98rem] z-30 text-6xl title-gradient"
                      >
                        {menuItem.projectName}
                      </p>
                      <div className=" flex-row grid md:grid-cols-3 mt-10 grid-cols-1 ">
                        <p className="flex  flex-col flex-wrap justify-center mt-8 leading-normal sm:leading-8">
                          <span className="font-semibold">Expertise</span>
                          {menuItem.type}
                        </p>
                        <p className=" flex flex-col flex-wrap justify-center mt-8 leading-normal sm:leading-8">
                          <span className="font-semibold ">Platforms</span>
                          {menuItem.type}
                        </p>
                        <p className=" flex flex-col flex-wrap justify-center mt-8 leading-normal sm:leading-8">
                          <span className="font-semibold ">Expertise</span>
                          {menuItem.type}
                        </p>
                      </div>
                    </div>
                    <div className="dmsans flex flex-col flex-wrap leading-[1.1] justify-center mt-8 sm:leading-8">
                      <span className="dmsans text-5xl mb-5">About</span>
                      <span className="text-lg">{menuItem.description}</span>
                    </div>
                    <div className=" md:m-0 max-w-full">
                      <div className="mx-auto mt-20 flex max-w-[88rem] flex-col mb-5 text-center">
                        <h2 className="font-heading text-4xl text-left dmsans font-medium leading-[1.1] mb-5 md:text-5xl">
                          Gallery
                        </h2>
                      </div>
                      <div className="mb-20 max-w-full animate-fade-in mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-14 gap-8 justify-center w-full">
                        {images.map((url) => (
                          <div key={url} className="">
                            <Image
                              height={400}
                              width={700}
                              src={url}
                              alt="uploaded"
                              className="project-frame"
                              style={{ filter: "brightness(110%)" }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center bg-gray-600">
                <h2 className="mx-auto font-semibold text-lg text-gray-200">
                  Loading Project...
                </h2>
              </div>
            )}
          </div>
        ) : (
          <div className="mx-auto justify-center p-6">
            <Head>
              <title>No Project || Studio Bind</title>
            </Head>
            <div className="bg-gray-800  mx-auto mt-8 p-8 border border-gray-300 rounded shadow-lg text-center">
              <p className="text-2xl text-red-500 font-semibold font-heading">
                Project not found
              </p>
              <p className="text-white mt-2">
                The requested project could not be found. Please try again later
                :)
              </p>
            </div>
          </div>
        )}
      </Suspense>
      <div className="hidden md:block">
        <SiteFooter />
      </div>
    </div>
  );
}
