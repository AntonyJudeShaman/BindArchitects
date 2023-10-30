import prisma from "@/lib/prisma";
import { SiteConfig } from "types";
import { Metadata } from "next";
import { Suspense } from "react";
import { MainNav } from "@/components/main-nav";
import { marketingConfig } from "config/marketing";
import Head from "next/head";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Project",
  description: "Projects by Studio Bind",
};

export interface Project {
  projectId: string;
  projectName: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  image10: string;
  testimonial: string;
  testimonialPic: string;
}

export default async function getStaticProps({
  params,
}: {
  params: { projectId: string };
}) {
  const project = await prisma.project.findUnique({
    where: {
      projectId: params.projectId,
    },
  });

  return (
    <div className="min-h-screen animate-fade-in py-8">
      <div className="md:ml-20 ml-10">
        <MainNav items={marketingConfig.mainNav} />
      </div>
      <p>id: {params.projectId}</p>
      <Suspense fallback={<h2 className="mx-auto ">Loading...</h2>}>
        {project ? (
          <div>
            <Head>
              <title>{project.projectName} || Studio Bind</title>
            </Head>
            <img
              src={`https://drive.google.com/uc?id=${project.description1}`}
              className="w-1/2"
              alt={project.projectName}
            />
            <h1>{project.projectName}</h1>
            <p>{project.description1}</p>
            <p>{project.description2}</p>
          </div>
        ) : (
          <p>Project not found</p>
        )}
      </Suspense>
    </div>
  );
}
