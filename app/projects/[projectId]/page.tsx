"use client"
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { app } from "@/components/firebase";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { HomePage, marketingConfig } from "config/marketing";
import { MainNav } from "@/components/main-nav";
import Head from "next/head";

const storage = getStorage(app);
const storageRef = ref(storage);

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const [images, setImages] = useState([]);

  const event = params.projectId; 
  const imagesRef = ref(storage, `eventImages/${event}/`);

  listAll(imagesRef)
    .then((res) => {
      const imagePromises = res.items.map((item) => getDownloadURL(item));
      Promise.all(imagePromises)
        .then((urls) => {
          setImages(urls as never[]);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });


  return (
    <div className="min-h-screen animate-fade-in py-8">
      <div className="md:ml-5 justify-center flex mb-10 md:justify-between">
        <MainNav items={HomePage.mainNav} />
        <nav className="justify-between">
          {marketingConfig &&
            marketingConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                aria-label="navbar items"
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "group flex flex-col text-right items-center overflow-hidden my-font hidden mr-4 title-gradient md:inline-block rounded-md p-2 text-sm font-medium hover:underline",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                <span className="">{item.title}</span>
              </Link>
            ))}
        </nav>
      </div>
      <Suspense fallback={<h2 className="mx-auto ">Loading...</h2>}>
        {params.projectId ? (
          <div>
            <Head>
              <title>{params.projectId} || Studio Bind</title>
            </Head>
            <div className="masonry-container min-h-screen">
              {images.map((url) => (
                <div key={url} className="masonry-item">
                  <img src={url} alt="uploaded" className="hhov" />
                </div>
              ))}
            </div>
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
    </div>
  );
}
