import React, { useEffect, useState } from "react";
import "./gallery.css";
import Footer from "./footer";
import "firebase/compat/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import Image from "next/image";
import { app } from "@/components/firebase";


const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, "images");

const HomeGallery = (projectName) => {
  const [images, setImages] = useState([]);

  const event = projectName;
  const imagesRef = storageRef(storage, "Event/" + event + "/");

  useEffect(() => {
    listAll(imagesRef)
      .then((res) => {
        const imagePromises = res.items.map((item) => getDownloadURL(item));
        Promise.all(imagePromises)
          .then((urls) => {
            setImages(urls);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [imagesRef]);

  useEffect(() => {
    if (localStorage.getItem("authUID") === "") {
      window.location.replace("/");
    }
  }, []);

  return (
    <>
      
      <div className="masonry-container min-h-screen">
        {images.map((url) => (
          <div key={url} className="masonry-item">
            <Image src={url} width={400} height={400} alt="uploaded" className="hhov" />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default HomeGallery;
