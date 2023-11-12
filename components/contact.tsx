import React from "react";
import Link from "next/link";
import Head from "next/head";

export function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Studio Bind Architects</title>
        <meta
          name="description"
          content="Contact Studio Bind Architects for architectural inquiries. Find our phone number, address, and email. Reach out to us for your residential and commercial projects in Chennai."
        />
      </Head>
      <section className="p-4 max-w-screen space-y-3 items-start text-left bg-slate-50 mb-20  dark:bg-transparent md:py-6">
        <div className="mx-auto mt-20 flex max-w-[88rem] flex-col space-y-4 text-left">
          <h2
            aria-label=" Contact The Studio"
            className="font-heading text-3xl dmsans font-medium leading-[1.1] mb-5 md:text-5xl"
          >
            Contact The Studio
          </h2>
        </div>
        <div className="md:max-w-full md:grid-cols-1">
          <div className="flex md:flex-col flex-col">
            <Link
              href="tel:8072701454"
              aria-label="Phone Number: 8072701454"
              className="text-xl hover:text-orange-400 dmsans leading-normal text-left text-muted-foreground sm:text-md sm:leading-8"
            >
              Phone Number: 8072701454
            </Link>
            <br />
            <p
              className="text-xl hover:text-orange-400 dmsans leading-normal text-left text-muted-foreground sm:text-md sm:leading-8"
              aria-label=" Address: 10, Anjugam Street, Meenakshi Amman Nagar,
              Alwarthirunagar, Chennai - 600087."
            >
              Address: 10, Anjugam Street, Meenakshi Amman Nagar, <br />
              Alwarthirunagar, Chennai - 600087.
            </p>
            <br />
            <Link
              href="mailto:bindarchitects@gmail.com"
              aria-label="Mail: bindarchitects@gmail.com"
              className="text-xl hover:text-orange-400 leading-normal text-left text-muted-foreground sm:text-md sm:leading-8"
            >
              Mail: bindarchitects@gmail.com
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
