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

export const metadata: Metadata = {
  title: "Admin",
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
      <div className="md:ml-20 ml-10">
        <MainNav items={marketingConfig.mainNav} />
      </div>
      <Nav />
      <p className="text-5xl font-heading font-semibold sub-gradient mb-5 mt-10 text-center display-animation">
        Add Projects
      </p>

      <ProjectForm />
      <SiteFooter />
    </div>
  );
}
