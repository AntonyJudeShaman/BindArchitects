"use client";
import * as React from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import image1 from "../assets/ykck.png";
import image2 from "../assets/terraceman.png";
import image3 from "../assets/mokshabar.png";
import image4 from "../assets/sportsone.png";
import image5 from "../assets/grandentrance.png";
import image6 from "../assets/casagrande.png";
import image7 from "../assets/casabudget.png";
import image8 from "../assets/visore.png";
import image9 from "../assets/delphi.png";
import image10 from "../assets/arrahman.png";
import image11 from "../assets/residence.png";
import image12 from "../assets/remy.png";
import image13 from "../assets/ccbm.png";
import image14 from "../assets/mga.png";
import image15 from "../assets/eastwest.png"

export default function ProjectForm() {
  const [loading, setLoading] = React.useState(false);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);

          const file = e.target.image1.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
              const base64Image = e.target.result.split(",")[1]; // Extract the base64 portion
              // Now, you can send `base64Image` to your API for storage.
            };
            reader.readAsDataURL(file);
          }

          fetch("/api/auth/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              projectName: e.currentTarget.projectname.value,
              projectNumber: parseInt(e.currentTarget.projectnumber.value),
              description1: e.currentTarget.description1.value,
              description2: e.currentTarget.description2.value,
              description3: e.currentTarget.description3.value,
              description4: e.currentTarget.description4.value,
              image1: e.target.image1.files[0],
            }),
          })
            .then(async (res) => {
              setLoading(false);
              if (res.status === 200) {
                toast.success("Project created successfully!!");
              } else {
                try {
                  const { error } = await res.json();
                  toast.error(error);
                } catch (error) {
                  console.error("Error parsing JSON:", error);
                  toast.error("An error occurred. Please try again later.");
                }
              }
            })
            .catch((error) => {
              console.error("Fetch error:", error);
              toast.error("An error occurred. Please try again later.");
            });
        }}
        className="flex flex-col bg-transparent space-y-4 sm:max-w-lg md:max-w-[50rem] mx-auto  px-4 py-8 sm:px-16"
      >
        <div>
          <Label
            htmlFor="projectname"
            className="block font-heading text-xs text-purple-600 uppercase"
            style={{
              filter: "contrast(180%) brightness(80%)",
            }}
          >
            Project Name
          </Label>
          <Input
            id="projectname"
            name="projectname"
            type="text"
            placeholder=""
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              filter: " brightness(180%)",
            }}
          />
        </div>
        <div>
          <Label
            htmlFor="projectnumber"
            className="block font-heading text-xs text-purple-600 uppercase"
            style={{
              filter: "contrast(180%) brightness(80%)",
            }}
          >
            Project Number
          </Label>
          <Input
            id="projectnumber"
            name="projectnumber"
            type="number"
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              filter: " brightness(180%)",
            }}
          />
        </div>
        <div>
          <Label
            htmlFor="description1"
            className="block font-heading text-xs text-purple-600 uppercase"
            style={{
              filter: "contrast(180%) brightness(80%)",
            }}
          >
            Description1
          </Label>
          <Textarea
            id="description1"
            name="description1"
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              filter: " brightness(180%)",
            }}
          />
        </div>
        <div>
          <Label
            htmlFor="description2"
            className="block font-heading text-xs text-purple-600 uppercase"
            style={{
              filter: "contrast(180%) brightness(80%)",
            }}
          >
            Description2
          </Label>
          <Textarea
            id="description2"
            name="description2"
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              filter: " brightness(180%)",
            }}
          />
        </div>
        <div>
          <Label
            htmlFor="description3"
            className="block font-heading text-xs text-purple-600 uppercase"
            style={{
              filter: "contrast(180%) brightness(80%)",
            }}
          >
            Description3
          </Label>
          <Textarea
            id="description3"
            name="description3"
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              filter: " brightness(180%)",
            }}
          />
        </div>
        <div>
          <Label
            htmlFor="description4"
            className="block font-heading text-xs text-purple-600 uppercase"
            style={{
              filter: "contrast(180%) brightness(80%)",
            }}
          >
            Description4
          </Label>
          <Textarea
            id="description4"
            name="description4"
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              filter: " brightness(180%)",
            }}
          />
        </div>
        <div>
          <Label
            htmlFor="description5"
            className="block font-heading text-xs text-purple-600 uppercase"
            style={{
              filter: "contrast(180%) brightness(80%)",
            }}
          >
            Description5
          </Label>
          <Textarea
            id="description5"
            name="description5"
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              filter: " brightness(180%)",
            }}
          />
        </div>
        <div>
          <Label
            htmlFor="image"
            className="block font-heading text-xs text-purple-600 uppercase"
            style={{
              filter: "contrast(180%) brightness(80%)",
            }}
          >
            Image
          </Label>
          <Input
            id="image1"
            name="image1"
            type="file"
            accept="image/*"
            className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              filter: "brightness(180%)",
            }}
          />
        </div>

        <Button
        aria-label="Create Project"
          disabled={loading}
          className={`${
            loading
              ? "cursor-not-allowed border-gray-200 bg-transparent"
              : "border-black  "
          } flex h-10 w-full items-center w-[20rem] mx-auto justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {loading ? (
            <LoadingDots color="green" />
          ) : (
            <p className="font-bold">Create</p>
          )}
        </Button>
      </form>
    </div>
  );
}
