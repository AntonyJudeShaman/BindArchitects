"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import anime from "animejs";
import "@/styles/notfound.css";
import image from "../assets/notfound.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div class="notfound p-6">
      <Link href="/" aria-label="go back to homepage">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image src={image} width={500} alt="404 not found" />
        </div>
      </Link>
      <h2 className="sub-gradient font-heading text-3xl pb-3 text-center">
        404 - Page not found
      </h2>
      <p className="font-heading  text-center pb-2 text-xl sm:text-6xl">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <div className="text-center mt-3">
        <Button
          href="/"
          size="lg"
          aria-label="go back to homepage"
          className="border-black bg-gradient-to-b from-green-500 to-blue-600 hover:to-green-500 hover:from-blue-600 text-white hover:bg-white hover:text-black"
        >
          Go To Homepage
        </Button>
      </div>
    </div>
  );
}
