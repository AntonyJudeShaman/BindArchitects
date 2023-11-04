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

const AddProject = (projectname) => {
  const [menuItems, setMenuItems] = useState([]);
  const [projectName, setprojectName] = useState("");
  const [description, setDescription] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [success, setSuccess] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const fetchMenuData = async () => {
      const menuRef = ref(database, "Event");
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
      const menuRef = ref(database, "Event/" + projectName);
      update(menuRef, {
        projectName,
        description,
        field1,
        field2,
        field3,
        field4,
      });

      setprojectName("");
      setDescription("");
      setField1("");
      setField2("");
      setField3("");
      setField4("");

      setEditItemId(null);
    } else if (projectName != null) {
      const menuRef = ref(database, "Event/" + projectName);
     
      const menuItem = {
        projectName,
        description,
        field1,
        field2,
        field3,
        field4,
      };
      update(menuRef, menuItem);

      setprojectName("");
      setDescription("");
      setField1("");
      setField2("");
      setField3("");
      setField4("");
    }
  };

  const handleEditItem = (item) => {
    setprojectName(item.projectName);
    setDescription(item.description);
    setField1(item.field1);
    setField2(item.field2);
    setField3(item.field3);
    setField4(item.field4);
  };

  const handleFileUpload = async (files) => {
    try {
      const file = files[0];
      const storageRef = reff(storage, `/Event/${projectName}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      console.log("File uploaded successfully.");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setIsUploading(false);
      }, 3000);
    } catch (error) {
      console.error("Error uploading file:", error);
      setIsUploading(false);
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
            className="flex  w-full rounded-md placeholder-zinc-50 border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
            type="text"
            rows={10}
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setprojectName(e.target.value)}
          />
          <br />

          <Textarea
            type="text"
            placeholder="Project Number"
            className="flex  w-full rounded-md placeholder-zinc-50 border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={field1}
            rows={10}
            onChange={(e) => setField1(e.target.value)}
          />
          <br />
          <Textarea
            type="text"
            className="flex  w-full rounded-md placeholder-zinc-50 border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Description 1"
            value={description}
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <Textarea
            type="text"
            className="flex  w-full rounded-md placeholder-zinc-50 border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Description 2"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
          />
          <br />
          <Textarea
            type="text"
            className="flex  w-full rounded-md placeholder-zinc-50 border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Project Type"
            value={field3}
            onChange={(e) => setField3(e.target.value)}
          />
          <br />
          <Textarea
            type="text"
            className="flex  w-full rounded-md placeholder-zinc-50 border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Project Year"
            value={field4}
            onChange={(e) => setField4(e.target.value)}
          />

          <br />
          <Dropzone onDrop={handleFileUpload} multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                style={{ marginBottom: "20px" }}
                className="flex  w-full rounded-md placeholder-zinc-50 border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Input {...getInputProps()} />
                <p>
                  Drag and drop an image file here, or click to select a file.
                </p>
              </div>
            )}
          </Dropzone>
          <br />
          {isUploading && (
            <div>
              <div className="spinner mx-auto d-block"></div>
              <h1 className="upload-text">Uploading...</h1>
            </div>
          )}
          {success && (
            <div className="fixed top-0 right-0 p-4 m-4 bg-green-500 text-white rounded-lg z-50">
              File uploaded successfully!
            </div>
          )}
          <Button
            type="submit"
            variant="secondary"
            className="text-white rounded-lg border border-zinc-50"
          >
            {editItemId ? "Update Project" : "Add Project"}
          </Button>
        </form>
        <Button
          variant="secondary"
          className="text-white mb-10 border border-zinc-50"
          onClick={() => handleEditItem(item)}
        >
          Edit Event
        </Button>
      </div>
    </>
  );
};

export default AddProject;
