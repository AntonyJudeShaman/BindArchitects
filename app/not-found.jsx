"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import anime from "animejs";
import "@/styles/notfound.css";
import image from "../assets/notfound.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function NotFound() {
  return (
    <div class="notfound flex bg flex-col p-6 justify-center h-screen">
      <Head>
        <title>Not Found || Studio Bind</title>
      </Head>
      
      <h2 className="dmsans contact-title pb-3 text-left">
        404 - Page not found
      </h2>
      <p className="dmsans  text-left pb-2 text-2xl sm:text-6xl">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <div className="text-left mt-8">
        <Link href="/" onClick={() => window.history.back()}>
        <Button
          size="lg"
          variant="white"
          aria-label="go back to homepage"
          className=""
        >
          Go Back
        </Button>
        </Link>
      </div>
    </div>
  );
}
