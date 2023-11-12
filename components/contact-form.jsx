"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import LoadingDots from "./loading-dots";
import logo from "../assets/8.png";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";

export function Contactform({ className }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showNameAlert, setNameAlert] = useState(false);
  const [showPhoneAlert, setPhoneAlert] = useState(false);
  const [showEmailAlert, setEmailAlert] = useState(false);

  function validate() {
    if (name === "") {
      setNameAlert(true);
      setPhoneAlert(false);
      setEmailAlert(false);
      return false;
    } else if (!/^[A-Za-z -]{3,25}$/.test(name)) {
      setNameAlert(true);
      setPhoneAlert(false);
      setEmailAlert(false);
      return false;
    }
    setNameAlert(false);
    if (email === "") {
      setEmailAlert(true);
      setNameAlert(false);
      setPhoneAlert(false);
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailAlert(true);
      setNameAlert(false);
      setPhoneAlert(false);
      return false;
    }
    setEmailAlert(false);
    if (phone === "") {
      setPhoneAlert(true);
      setNameAlert(false);
      setEmailAlert(false);
      return false;
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneAlert(true);
      setNameAlert(false);
      setEmailAlert(false);
      return false;
    }
    setPhoneAlert(false);

    return true;
  }

  const openDialog = () => {
    setTimeout(() => {
      setShowDialog(true);
    }, 3000);
    setTimeout(() => {
      setShowDialog(false);
    }, 8000);
  };

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xdl6hsk",
      "template_owtcpiw",
      form.current,
      "6LeHj0SAeLt3fLezf"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");

      sendEmail(e);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      openDialog();
    }
  };

  return (
    <div
      className=" justify-start max-w-[50rem] p-4 "
      aria-label="contact form"
    >
      <form
        ref={form}
        onSubmit={handleSubmit}
        className={cn("space-x-4 md:-mt-12 sm:pt-10", className)}
        aria-label="contact-form"
        style={{
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <div className="grid gap-4 ">
          <p
            className="md:text-5xl text-5xl dmsans-bold mb-4 text-left "
            aria-label="Contact us"
          >
            Hello! Let&apos;s talk about your new project
          </p>
          <p
            className="md:text-2xl text-muted-foreground text-xl mb-4   text-left "
            aria-label="Contact us"
          >
            Fill in the form to contact us or send an email to{" "}
            <Link
              href="mailto:bindarchitects@gmail.com"
              aria-label="Mail: bindarchitects@gmail.com"
            >
              <span className="dmsans-bold hover:text-orange-400">
                bindarchitects@gmail.com
              </span>
            </Link>
          </p>
          {/* <div className="wave-group">
            <Input required type="text" className="input" id="name"
              name="name"
              value={name}
              style={{
                filter: "brightness(180%)",
              }}/>
            <span className="bar"></span>
            <label className="label">
              <span className="label-char" style={{ "--index": 0 }}>
                N
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                a
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                m
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                e
              </span>
            </label>
          </div> */}
          <div
            className="grid grid-cols-1  md:grid-cols-1  items-center gap-4"
            aria-label="enter your name"
          >
            {/* <Label
              htmlFor="name"
              className="sub-gradient text-lg font-semibold"
            >
              Name
            </Label> */}

            <Input
              id="name"
              name="name"
              className="md:col-span-3 input text-lg"
              placeholder="Enter your name"
              aria-label="name field"
              value={name}
              style={{
                filter: "brightness(180%)",
              }}
              onChange={(e) => setName(e.target.value)}
            />
            {showNameAlert && (
              <div className="error-gradient text-md w-full">
                <p>Name is Empty or Invalid.</p>
              </div>
            )}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-1  items-center gap-4"
            aria-label="enter your email"
          >
            {/* <Label
              htmlFor="email"
              className="sub-gradient text-lg font-semibold"
            >
              Email<span className="error-gradient"> *</span>
            </Label> */}
            <Input
              id="email"
              name="email"
              className="md:col-span-3 text-lg"
              aria-label="email field"
              placeholder="Enter your email"
              value={email}
              style={{
                filter: "brightness(180%)",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            {showEmailAlert && (
              <div className="error-gradient text-md w-full">
                <p>Email is Empty or Invalid.</p>
              </div>
            )}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-1  items-center gap-4"
            aria-label="enter your phone number"
          >
            {/* <Label
              htmlFor="phone"
              className="sub-gradient text-lg font-semibold"
            >
              Phone<span className="error-gradient"> *</span>
            </Label> */}
            <Input
              id="phone"
              name="phone"
              aria-label="phone number field"
              style={{
                filter: "brightness(180%)",
              }}
              className="md:col-span-3 text-lg"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {showPhoneAlert && (
              <div className="error-gradient text-md w-full">
                <p className="w-full">Phone is Empty or Invalid.</p>
              </div>
            )}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-1  items-center gap-4"
            aria-label="enter your message optional"
          >
            {/* <Label
              htmlFor="message"
              className="sub-gradient text-lg font-semibold"
            >
              Message
            </Label> */}
            <Textarea
              id="message"
              style={{
                filter: "brightness(180%)",
              }}
              name="message"
              aria-label="message field"
              className="md:col-span-3 text-lg"
              placeholder="Type your message here."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {showDialog && (
            <div className="text-center success-gradient text-md pb-2">
              <p>
                Your details has been submitted. Our team will contact you
                shortly.
              </p>
            </div>
          )}
          <div
            className="flex flex-row mt-4 items-center gap-4"
            aria-label="please check this checkbox"
          >
            <Checkbox aria-label="tick this checkbox"/>
            <div htmlFor="message" className="pt-2 pb-2 dmsans">
              By submitting this form you agree to our{" "}
              <Link
                href="/terms"
                aria-label="Terms Of Use"
                className="hover:text-orange-400  dmsans-bold underline underline-offset-4"
              >
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                aria-label="Privacy Policy"
                className="hover:text-orange-400  dmsans-bold underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </div>
          </div>
          <div className="align-right float-right text-right mb-5">
            <Button
              aria-label={loading ? "Submitting..." : "Submit the form"}
              type="submit"
              variant="white"
              className=" w-full mt-4 border text-md border-green-300 "
              disabled={loading}
            >
              {loading ? <LoadingDots color="red" /> : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
