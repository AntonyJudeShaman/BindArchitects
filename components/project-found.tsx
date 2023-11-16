import React from "react";

export function ProjectFound() {
  return (
    <div className="mx-auto flex justify-center min-h-screen items-center p-6">
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
