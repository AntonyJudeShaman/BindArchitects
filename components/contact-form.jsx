"use client"
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import LoadingDots from "./loading-dots";
import logo from "../assets/8.png";

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
    <div className="mx-auto max-w-lg form-container " aria-label="contact form">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className={cn("space-x-4 md:-mt-4 sm:pt-10", className)}
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div className="grid gap-4 py-4">
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-4"
            
            aria-label="enter your name"
          >
            <Label
              htmlFor="name"
              className="sub-gradient text-lg font-semibold"
            >
              Name<span className="error-gradient"> *</span>
            </Label>
            <Input
              id="name"
              name="name"
              className="md:col-span-3  caret-blue-500 focus:caret-indigo-500"
              placeholder="Enter your name"
              value={name}
              style={{
                filter: "brightness(150%)",
              }}
              onChange={(e) => setName(e.target.value)}
            />
            {showNameAlert && (
              <div className="error-gradient text-sm w-full">
                <p>Name is Empty or Invalid.</p>
              </div>
            )}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-4"
            
            aria-label="enter your email"
          >
            <Label
              htmlFor="email"
              className="sub-gradient text-lg font-semibold"
            >
              Email<span className="error-gradient"> *</span>
            </Label>
            <Input
              id="email"
              name="email"
              className="md:col-span-3 caret-blue-500 focus:caret-indigo-500"
              placeholder="Enter your email"
              value={email}
              style={{
                filter: "brightness(150%)",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            {showEmailAlert && (
              <div className="error-gradient text-sm w-full">
                <p>Email is Empty or Invalid.</p>
              </div>
            )}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-4"
            
            aria-label="enter your phone number"
          >
            <Label
              htmlFor="phone"
              className="sub-gradient text-lg font-semibold"
            >
              Phone<span className="error-gradient"> *</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              style={{
                filter: "brightness(150%)",
              }}
              className="md:col-span-3 caret-blue-500 focus:caret-indigo-500"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {showPhoneAlert && (
              <div className="error-gradient text-sm w-full">
                <p className="w-full">Phone is Empty or Invalid.</p>
              </div>
            )}
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-4"
          
            aria-label="enter your message optional"
          >
            <Label
              htmlFor="message"
              className="sub-gradient text-lg font-semibold"
            >
              Message
            </Label>
            <Textarea
              id="message"
              style={{
                filter: "brightness(150%)",
              }}
              name="message"
              className="md:col-span-3 h-28 caret-blue-500 focus:caret-indigo-500"
              placeholder="Type your message here."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {showDialog && (
            <div className="text-center success-gradient text-sm pb-2">
              <p>
                Your details has been submitted. Our team will contact you
                shortly.
              </p>
            </div>
          )}
          <div className="align-right float-right text-right mb-5">
            <Button
              aria-label="submit contact form"
              type="submit"
              className="w-full w-30 mt-2 border border-green-300 bg-gradient-to-bl from-pink-500 to-purple-700 hover:to-pink-500 hover:from-purple-600"
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
