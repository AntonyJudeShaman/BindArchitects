"use client";
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import Dropzone from "react-dropzone";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  getStorage,
  ref as reff,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import {
  getDatabase,
  ref,
  onValue,
  push,
  update,
  remove,
} from "firebase/database";
import { firebaseConfig } from "@/components/firebase";
import toast from "react-hot-toast";

const firebaseApp = initializeApp(firebaseConfig, "events");
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

function newLine(text) {
  if (!text) return null;

  const sent = text;

  return sent.split("\n").map((line, index) => {
    if (line.includes("<b>") && line.includes("</b>")) {
      const parts = line.split(/(<b>.*<\/b>)/);
      return parts.map((part, i) => {
        if (part.startsWith("<b>") && part.endsWith("</b>")) {
          const boldText = part.replace(/<\/?b>/g, "");
          return <b key={index + i}>{boldText}</b>;
        } else {
          return (
            <React.Fragment key={index + i}>
              {part}
              <br />
            </React.Fragment>
          );
        }
      });
    } else {
      return (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      );
    }
  });
}

const AddProject = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [projectName, setprojectName] = useState("");
  const [description, setDescription] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [projectNumber, setprojectNumber] = useState("");
  const [type, settype] = useState("");
  const [description2, setdescription2] = useState("");
  const [projectYear, setprojectYear] = useState("");
  const [projectPath, setprojectPath] = useState("");
  const [expertise, setExpertise] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchMenuData = async () => {
      const menuRef = ref(database, "Project");
      onValue(menuRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const menuData = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setMenuItems(menuData);
        }
      });
    };

    fetchMenuData();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editItemId) {
      const menuRef = ref(database, "Project/" + `${projectPath}/`);
      update(menuRef, {
        projectName,
        description,
        projectNumber,
        type,
        description2,
        projectYear,
        projectPath,
        expertise,
        location,
      });

      setprojectName("");
      setDescription("");
      setprojectNumber("");
      settype("");
      setdescription2("");
      setprojectYear("");
      setprojectPath("");
      setExpertise("");
      setLocation("");

      setEditItemId(null);
      toast.success("Project updated successfully.");
    } else if (projectName != null) {
      const menuRef = ref(database, "Project/" + `${projectPath}/`);

      const menuItem = {
        projectName,
        description,
        projectNumber,
        type,
        description2,
        projectYear,
        projectPath,
        expertise,
        location,
      };
      update(menuRef, menuItem);
      toast.success("Project created successfully.");
      setprojectName("");
      setDescription("");
      setprojectNumber("");
      settype("");
      setdescription2("");
      setprojectYear("");
      setExpertise("");
      setLocation("");
      setprojectPath("");
    }
  };

  const handleEditItem = (item) => {
    setprojectName(item.projectName);
    setDescription(item.description);
    setprojectNumber(item.projectNumber);
    settype(item.type);
    setdescription2(item.description2);
    setprojectYear(item.projectYear);
    setprojectPath(item.projectPath);
    setExpertise(item.expertise);
    setLocation(item.location);
  };

  const handleFileUpload = async (files) => {
    try {
      const file = files[0];
      const uniqueFileName = `${projectPath}/${Date.now()}_${file.name}`;
      const storageRef = reff(storage, "Project/" + uniqueFileName);

      toast.loading("File Uploading. Please wait...");
      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);
      toast.dismiss();
      toast.success("File uploaded successfully.");
    } catch (error) {
      toast.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <div className="p-6 md:p-12">
        <form
          onSubmit={handleFormSubmit}
          style={{ textAlign: "center", justifyContent: "center" }}
          className="d-flex flex-wrap items-center"
        >
          <Textarea
            className="flex  w-full rounded-md placeholder:text-white border border-zinc-600 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
            type="text"
            rows={10}
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setprojectName(e.target.value)}
            required
          />
          <br />

          <Textarea
            type="text"
            placeholder="Project Number"
            className="flex  w-full rounded-md placeholder:text-white border border-zinc-600 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={projectNumber}
            rows={10}
            onChange={(e) => setprojectNumber(e.target.value)}
            required
          />
          <br />

          <Textarea
            type="text"
            className="flex  w-full rounded-md placeholder:text-white border border-zinc-600 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Project Sector"
            value={type}
            onChange={(e) => settype(e.target.value)}
            required
          />
          <br />
          <Textarea
            type="text"
            className="flex  w-full rounded-md placeholder:text-white border border-zinc-600 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Expertise"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            required
          />
          <br />
          <Textarea
            type="text"
            className="flex  w-full rounded-md placeholder:text-white border border-zinc-600 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <br />

          <Textarea
            type="text"
            className="flex  w-full rounded-md placeholder:text-white border border-zinc-600 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Project Year"
            value={projectYear}
            onChange={(e) => setprojectYear(e.target.value)}
            required
          />

          <br />
          <Textarea
            type="text"
            className="flex  w-full rounded-md placeholder:text-white border border-zinc-600 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Project Name in small"
            value={projectPath}
            onChange={(e) => setprojectPath(e.target.value)}
            required
          />
          <br />
          <Textarea
            type="text"
            className="flex  w-full rounded-md placeholder:text-white border border-zinc-600 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Description 1"
            value={description}
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <br />
          <Textarea
            type="text"
            className="flex  w-full rounded-md placeholder:text-white border border-zinc-600 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Description 2"
            value={description2}
            onChange={(e) => setdescription2(e.target.value)}
          />
          <br />
          <Dropzone onDrop={handleFileUpload} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                style={{ marginBottom: "20px" }}
                className="flex  w-full rounded-md placeholder:text-white border border-zinc-600 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Input {...getInputProps()} />
                <p>
                  Drag and drop an image file here, or click to select a file.
                </p>
              </div>
            )}
          </Dropzone>
          <br />
          <br />

          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="text-white text-md rounded-lg border border-zinc-50"
          >
            {editItemId ? "Update Project" : "Add Project"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddProject;
