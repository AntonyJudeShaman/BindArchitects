import React from "react";
import { Metadata } from "next";
import Nav from "@/components/nav";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { marketingConfig } from "config/marketing";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { revalidateTag } from "next/cache";
import toast from "react-hot-toast";
import { Label } from "@/components/ui/label";
import SignOut from "@/components/sign-out";
import ProjectForm from "@/components/projectform";
// import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import AddProject from "@/components/add-project"
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admin | Studio Bind",
  description: "Admin page to add and delete projects",
};

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default async function ProjectsHome() {
  // const { pending } = useFormStatus()

  const addProjectToDatabase = async (e: FormData) => {
    "use server";

    const id = e.get("id")?.toString();
    const name = e.get("name")?.toString();
    const description = e.get("description")?.toString();
    const image = e.get("image")?.toString();

    if (!id || !name || !description || !image) return;

    const newProject: Project = {
      id,
      name,
      description,
      image,
    };
    await fetch("https://65157bb8dc3282a6a3ce7ead.mockapi.io/projs", {
      method: "POST",
      body: JSON.stringify(newProject),
      headers: {
        "Content-Type": "application/json",
      },
    });

    toast.success("New project created successfully.");

    revalidateTag("projects");
  };

  return (
    <div className="min-h-screen animate-fade-in py-8">
      <SignOut />
      <div className="md:ml-5 justify-center flex  md:justify-between">
        <MainNav items={marketingConfig.mainNav} />
        <nav className="justify-between">
          {marketingConfig &&
            marketingConfig.mainNav.map((item, index) => (
              <Link
                key={index}
                aria-label="navbar items"
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "group flex hover:text-orange-400 flex-col text-right items-center overflow-hidden my-font hidden mr-4 title-gradient md:inline-block rounded-md p-2 text-sm font-medium hover:underline",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                <span className="">{item.title}</span>
              </Link>
            ))}
        </nav>
      </div>
      <p className="text-5xl font-heading font-semibold sub-gradient mb-5 mt-10 text-center display-animation">
        Add Projects
      </p>

      <AddProject/>
      <SiteFooter />
    </div>
  );
}
