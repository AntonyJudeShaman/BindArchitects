import Link from "next/link";
import React from "react";

export function Contact() {
  return (
    <div className="">
      <section
        className="container mx-auto space-y-3 items-center text-center bg-slate-50 mb-20 animate-fade-right dark:bg-transparent md:py-6"
        aria-label="about us section"
      >
        <div className="mx-auto mt-20 flex max-w-[88rem] flex-col space-y-4 text-center">
          <h2 className="font-heading text-3xl text-left dmsans font-medium leading-[1.1] mb-5 md:text-5xl">
            Contact The Studio
          </h2>
        </div>
        <div className="md:max-w-full md:grid-cols-1">
          <div className="flex md:flex-col flex-col">
            <Link
              href="tel:8072701454"
              className="flex-1 text-xl dmsans leading-normal dmsans text-left text-muted-foreground sm:text-md sm:leading-8"
            >
              Phone Number: 8072701454
            </Link>
            <br/>
            <p className="text-xl dmsans  leading-normal text-left text-muted-foreground sm:text-md sm:leading-8">
              Address: 10, Anjugam Street, Meenakshi Amman Nagar,<br/>
              Alwarthirunagar, Chennai - 600087.
            </p>
            <br />
            <Link
              href="mailto:bindarchitects@gmail.com"
              className="text-xl dmsans  leading-normal text-left text-muted-foreground sm:text-md sm:leading-8"
            >
              Mail: bindarchitects@gmail.com
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
