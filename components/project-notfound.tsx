import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectNotFound() {
  return (
    <div className="mx-auto justify-center max-h-screen items-center p-6">
    <title>Project not found</title>
    <Link
      href=""
      className="cursor-pointer"
      onClick={() => window.history.back()}
    >
      <ArrowLeft className="absolute md:left-8 left-4 top-8 text-white w-8 h-8" />
    </Link>
    <div className="bg-gray-800  mx-auto mt-16 justify-center items-center p-8 border border-gray-300 rounded shadow-lg text-center">
      <p className="text-2xl text-red-500 font-semibold font-heading">
        Project not found
      </p>
      <p className="text-white mt-2">
        The requested project could not be found. Please try again later
        :)
      </p>
    </div>
  </div>
  );
}

export default ProjectNotFound;
