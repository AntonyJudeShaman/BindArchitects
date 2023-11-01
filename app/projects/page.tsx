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

  useEffect(() => {
    // const fetchData = async () => {
    // try {
    const cachedData = localStorage.getItem("cachedProjects");
    const cachedExpiry = localStorage.getItem("cachedProjectsExpiry");
    const expiryTimestamp = cachedExpiry ? parseInt(cachedExpiry, 10) : 0;
    const currentTimestamp = new Date().getTime();

    if (cachedData && currentTimestamp < expiryTimestamp) {
      setProjects(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    // const res = await fetch("http://localhost:3000/api/auth/viewdata", {
    //   method: "GET",
    //   next: {
    //     tags: ["projects"],
    //   },
    // });

    // if (!res.ok) {
    //   throw new Error("Network response was not ok");
    // }

    // const data: Project[] = await res.json();
    // setProjects(data);

    const newExpiryTimestamp = currentTimestamp + 60 * 60 * 1000;
    // localStorage.setItem("cachedProjects", JSON.stringify(data));
    localStorage.setItem("cachedProjectsExpiry", newExpiryTimestamp.toString());

    setLoading(false);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    //   setError("An error occurred while fetching data.");
    //   setLoading(false);
    // }
    // };
    // fetchData();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Get the image element
    const img = e.currentTarget.querySelector("img");

    if (img) {
      // Calculate the percentage of mouse position relative to the image
      const xPercentage = (e.nativeEvent.offsetX / img.clientWidth) * 100;
      const yPercentage = (e.nativeEvent.offsetY / img.clientHeight) * 100;

      // Adjust the image position based on the mouse position
      img.style.transform = `translate(${xPercentage * 0.1}px, ${
        yPercentage * 0.1
      }px)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    // Reset the image position on mouse leave
    const img = e.currentTarget.querySelector("img");

    if (img) {
      img.style.transform = "translate(0, 0)";
    }
  };

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
      className="min-h-screen animate-fade-in py-8"
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
      
      {/* <div className="flex flex-wrap gap-2 justify-center">
        {projects.map((project) => (
          <Link href={`/projects/${project.projectId}`} key={project.projectId}>
            <div
              key={project.projectId}
              className="image-frame overflow-hidden max-w-[69rem] mb-10 relative"
              style={{ padding: "20px" }} // Adjust padding as needed
            >
              <img
                src={`https://drive.google.com/uc?id=${project.description1}`}
                alt={project.projectName}
                className="transition-transform duration-300 ease-in-out"
              />
              <div className=" text-xl bottom-0 left-0 right-0  p-4">
                <p className="text-left">{project.projectName}</p>
                <p className="text-right text-foreground">2023</p>
              </div>
            </div>
          </Link>
        ))}
      </div> */}
      <FreeQuote />
      <SiteFooter />
    </div>
  );
}

export default ProjectsHome;
