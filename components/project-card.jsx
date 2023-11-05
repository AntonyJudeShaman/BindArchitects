import React from "react";
import Link from "next/link";

const ProjectCard = ({ title, imageUrl, year, link }) => {
  return (
    <Link href={link}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-auto" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500">{year}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
