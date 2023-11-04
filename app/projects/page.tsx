"use client";
import { GetStaticProps, GetStaticPropsContext } from "next";
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import { MainNav } from "@/components/main-nav";
import { HomePage, marketingConfig } from "config/marketing";
import Link from "next/link";
import Nav from "@/components/nav";
import { ProjectNav } from "@/components/project-nav";
import { SiteFooter } from "@/components/site-footer";
import { Projects } from "@/components/projects";
import Head from "next/head";
import FreeQuote from "@/components/free-quote";
import { cn } from "@/lib/utils";
import Card from "@/components/StickyCard";



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

function ProjectsHome() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  if (loading) {
    return (
      <div className="mx-auto justify-center align-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto justify-center align-center">Error: {error}</div>
    );
  }

  return (
    <div
      className="min-h-screen animate-fade-in py-2 mt-5"
      data-theme=""
      style={{ visibility: loading ? "hidden" : "visible" }}
    >
      <Head>
        <title>Projects | Studio Bind</title>
      </Head>
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

      <Card />

      <br />
      <br />
      <FreeQuote />
      <SiteFooter />
    </div>
  );
}

export default ProjectsHome;
