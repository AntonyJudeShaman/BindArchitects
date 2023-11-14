import * as React from "react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import logo from "./logo.png";
import Image from "next/image";
import { siteConfig } from "config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import "@/styles/fonts.css";

export default function SiteFooter({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="max-w-screen md:-ml-32 md:-mr-32">
      <footer className="md:py-8 bg-footer">
        <Link href="/contact">
          <div className="sm:flex sm:items-center  sm:justify-between">
            <div className="flex items-center mx-auto mb-4 sm:mb-0 max-w-[65rem]">
              <span className="self-center mx-auto  flex mt-20 mb-10 footer-title dmsans-heading   whitespace-nowrap ">
                Contact Us
              </span>
            </div>
          </div>
        </Link>
        <hr className="my-8 border-zinc-600 mx-auto justify-between md:max-w-[85rem] max-w-[23rem] lg:my-8" />
        <div className="flex md:flex-row flex-col gap-y-8 justify-between items-center mx-auto text-lg md:text-md md:max-w-[85rem] max-w-[20rem] sm:text-center  text-gray-50">
          <Link
            aria-label="Behance"
            href="https://www.behance.net/thewixstudio"
            className="px-4 justify-start md:mt-0 mt-10 md:ml-8 ml-0"
          >
            Behance
          </Link>
          <Link
            aria-label="Instagram"
            href="https://www.instagram.com/studio_bind/"
            className="flex-1 px-4"
          >
            Instagram
          </Link>
          <Link
            aria-label="Facebook"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.bindarchitects.com%2Ffaq%3FquestionId%3Dbbe7072b-402e-4a9a-9fe1-cbf90f0c831e&appDefId=14c92d28-031e-7910-c9a8-a670011e062d"
            className="flex-1 px-4"
          >
            Facebook
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCTI09wWkEJeNy7wXwD4zSCQ"
            aria-label="youtube"
            className="justify-end px-4 md:mb-0 mb-10 md:mr-8 mr-0"
          >
            Youtube
          </Link>
        </div>
      </footer>
    </div>
  );
}
