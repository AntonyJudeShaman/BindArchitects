import React from "react";
import Link from "next/link";
import Head from "next/head";

export function Contact() {
  return (
    <div
      className="md:-ml-32 md:-mr-32 "
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <Head>
        <title>Contact Us - Studio Bind Architects</title>
        <meta
          name="description"
          content="Contact Studio Bind Architects for architectural inquiries. Find our phone number, address, and email. Reach out to us for your residential and commercial projects in Chennai."
        />
      </Head>
      <section className="p-6 md:p-0 pb-28 md:pb-24  md:ml-24 max-w-screen space-y-3 items-start text-left md:py-6">
        <div className="mx-au mt-20 flex max-w-[88rem] flex-col space-y-4 text-left">
          <h2
            aria-label=" Contact The Studio"
            className="font-heading text-6xl text-black dmsans-bold font-medium leading-[1.1] mb-5 md:text-7xl"
          >
            Contact The Studio
          </h2>
        </div>
        <div className="md:max-w-full md:grid-cols-1">
          <div className="flex md:flex-col flex-col">
            <Link
              href="tel:8072701454"
              target="_blank"
              aria-label="Phone Number: 8072701454"
              className="text-xl hover:text-orange-400 dmsans leading-normal text-left text-gray-800 sm:text-md sm:leading-8"
            >
              Phone Number: 8072701454
            </Link>
            <br />
            <Link
              href="https://maps.app.goo.gl/pdZy7w8shffs79kt5"
              target="_blank"
              className="text-xl hover:text-orange-400 dmsans leading-normal text-left text-gray-800 sm:text-md sm:leading-8"
              aria-label=" Address: 10, Anjugam Street, Meenakshi Amman Nagar,
              Alwarthirunagar, Chennai - 600087."
            >
              Address: 10, Anjugam Street, Meenakshi Amman Nagar, <br />
              Alwarthirunagar, Chennai - 600087.
            </Link>
            <br />
            <Link
              href="mailto:bindarchitects@gmail.com"
              target="_blank"
              aria-label="Mail: bindarchitects@gmail.com"
              className="text-xl hover:text-orange-400  leading-normal text-left text-gray-800 sm:text-md sm:leading-8"
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
