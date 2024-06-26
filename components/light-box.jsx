"use client";
import React, { useState, useRef, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import LoadingDots from "./loading-dots";
import logo from "../assets/8.png";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { Input2 } from "./ui/input2";
import { Textarea2 } from "./ui/textarea2";
import { Checkbox2 } from "./ui/checkbox2";

export function LightBox({ className }) {
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
    }, 2000);
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
      className={cn(
        "space-x-4 pt-0 sm:pt-10 dmsans justify-center flex",
        className
      )}
      aria-label="contact form"
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="white"
            className="border-2 border-green-50 dmsans-bold  from-green-500 to-blue-600 hover:to-green-500 hover:from-blue-600  w-full"
            size="lg"
            aria-label="Say Hi by filling out the form"
          >
            Say Hi!!
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center dmsans font-semibold text-3xl">
              Book a Free Design Session
            </DialogTitle>
          </DialogHeader>
          <form ref={form} onSubmit={handleSubmit} aria-label="contact form">
            <div className="grid gap-4 py-4 flex flex-col">
              <div
                className="grid grid-cols-1 md:grid-cols-1 items-center "
                aria-label="enter your name"
              >
                <Label htmlFor="name" className="dmsans font-semibold">
                  Name
                </Label>
                <Input2
                  id="name"
                  name="name"
                  className="md:col-span-3 caret-blue-500 focus:caret-indigo-500"
                  placeholder="Enter your name"
                  value={name}
                  aria-label="Name field"
                  onChange={(e) => setName(e.target.value)}
                />
                {showNameAlert && (
                  <div className=" error-gradient my-font font-semibold  text-sm w-full">
                    <p>Name is Empty or Invalid.</p>
                  </div>
                )}
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-1 items-center "
                aria-label="enter your email"
              >
                <Label htmlFor="email" className="dmsans font-semibold">
                  Email
                </Label>
                <Input2
                  id="email"
                  name="email"
                  className="md:col-span-3 caret-blue-500 focus:caret-indigo-500"
                  placeholder="Enter your email"
                  value={email}
                  aria-label="email field"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {showEmailAlert && (
                  <div className=" error-gradient my-font font-semibold  text-sm w-full">
                    <p>Email is Empty or Invalid.</p>
                  </div>
                )}
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-1 items-center"
                aria-label="enter your phone number"
              >
                <Label htmlFor="phone" className="dmsans font-semibold">
                  Phone
                </Label>
                <Input2
                  id="phone"
                  name="phone"
                  className="md:col-span-3 caret-blue-500 focus:caret-indigo-500"
                  placeholder="Enter your phone number"
                  value={phone}
                  aria-label="phone number field"
                  onChange={(e) => setPhone(e.target.value)}
                />
                {showPhoneAlert && (
                  <div className=" error-gradient my-font font-semibold  text-sm w-full">
                    <p className="w-full">Phone is Empty or Invalid.</p>
                  </div>
                )}
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-1 items-center"
                aria-label="enter your message optional"
              >
                <Label htmlFor="message" className="dmsans font-semibold">
                  Message
                </Label>
                <Textarea2
                  id="message"
                  name="message"
                  className="md:col-span-3 h-28 caret-blue-500 focus:caret-indigo-500"
                  placeholder="Type your message here."
                  value={message}
                  aria-label="message field optional"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div
                className="flex flex-row items-center gap-4"
                aria-label="please check this"
              >
                <Checkbox2 className="border border-zinc-50" />
                <div htmlFor="message" className="pt-2 pb-2 dmsans">
                  By submitting this form you agree to our{" "}
                  <Link
                    href="/terms"
                    className="hover:text-orange-400  dmsans-bold underline underline-offset-4"
                  >
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="hover:text-orange-400  dmsans-bold underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  .
                </div>
              </div>
            </div>
            {showDialog && (
              <Dialog className="pb-2">
                <DialogTrigger asChild>
                  <div className="text-center success-gradient  text-sm ">
                    <p>
                      Your details has been submitted. Our team will contact you
                      shortly.
                    </p>
                  </div>
                </DialogTrigger>
              </Dialog>
            )}
            <DialogFooter>
              <Button
                type="submit"
                className="w-40 mt-2  "
                disabled={loading}
                variant="white"
                aria-label="Submit contact form"
              >
                {loading ? <LoadingDots color="red" /> : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
