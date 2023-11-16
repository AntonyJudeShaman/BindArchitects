import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import LoadingDots from "./loading-dots";

export function ProjectFound() {
  return (
    <div className="mx-auto flex justify-center min-h-screen items-center p-6">
      <title>Loading Project</title>
      <Link
        href=""
        className="cursor-pointer"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="absolute md:left-8 left-4 top-8 text-white w-8 h-8" />
      </Link>
      <div className="bg-tranparent flex flex-row mx-auto mt-16 justify-center items-center p-8 rounded shadow-lg text-center">
        <p className="text-2xl  dmsans-bold">
          Loading please wait &nbsp;&nbsp;
        </p>
        <div className=" justify-center items-center">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-t-blue-500 h-12 w-12"></div>
    </div>
      </div>
    </div>
  );
}

export default ProjectFound;
