import React from "react";
import "@/styles/card.css";
import { useState,useEffect } from "react";
import Link from "next/link";
import { app } from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";


const database = getDatabase(app);

const projects = [
  {
    id: 1,
    title: "Project 1",
    category: "Category 1",
    type: "Type 1",
    year: 2021,
    slug: "project-1",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Category 2",
    type: "Type 2",
    year: 2022,
    slug: "project-2",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Category 2",
    type: "Type 2",
    year: 2022,
    slug: "project-2",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Category 2",
    type: "Type 2",
    year: 2022,
    slug: "project-2",
  },{
    id: 1,
    title: "Project 1",
    category: "Category 1",
    type: "Type 1",
    year: 2021,
    slug: "project-1",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Category 2",
    type: "Type 2",
    year: 2022,
    slug: "project-2",
  },
  {
    id: 1,
    title: "Project 1",
    category: "Category 1",
    type: "Type 1",
    year: 2021,
    slug: "project-1",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Category 2",
    type: "Type 2",
    year: 2022,
    slug: "project-2",
  },

];

const cardColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
];  

function Card() {

  const [menuItems, setMenuItems] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const menuRef = ref(database, "Project/");
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const menuData = Object.values(data);
        setMenuItems(menuData);
      }
    });
  }, []);

  return (
    <div className="container md:pt-10 mb-10" id="cards">
      {projects.map((project, index) => (
        <div
          className={`card pt-10 w-full ${index % 5 !== 0 ? "mt-5" : ""}${
            cardColors[index % cardColors.length] 
          }`}
          key={project.id}
          
        >
          <Link href={`/projects/${project.slug}`}>
            <div className="card-body mt-10 max-w-[80rem] bg-black border border-zinc-950 justify-center ml-20 flex-col flex">
              <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
                <h2 className="font-heading md:text-3xl ml-20">{project.title}</h2>
              </div>
              <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
                <div className="flex">
                  <span className="font-heading text-2xl mb-3">
                    {project.category}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-heading ml-10 text-2xl mb-3">
                    {project.type}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-heading ml-10 text-2xl mb-3">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card;
