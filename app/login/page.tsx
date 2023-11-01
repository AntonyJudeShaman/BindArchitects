import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import logo from "@/components/favicon.png";
import bg from "./bg.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function Login() {
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-1 h-screen animate-fade-in">
      {/* Left Half */}
      {/* <div className="hidden md:flex md:h-full md:w-full md:items-center md:bg-cover md:bg-center">
        <Image
          src={bg}
          alt="Background Image"
          className="w-full h-full object-cover"
          style={{
            filter: "contrast(180%) brightness(80%)",
          }}
        />
      </div> */}

      {/* Right Half */}
      <div className="flex flex-col  bg-transparent items-center mx-auto d-block justify-center">
        <Link href="/">
          <ArrowLeft className="absolute left-8 top-8 text-white w-8 h-8" />
        </Link>
        <div className="w-full mx-auto space-y-6 animate-fade-in">
          <div className="text-center animate-fade-in">
            <h3
              className="text-3xl pb-3 font-heading sub-gradient font-semibold tracking-tight"
              data-theme=""
            >
              Admin Login
            </h3>
            <p className="text-sm text-muted-foreground">
              Use your email and password to sign in
            </p>
          </div>
          <Form type="login" />
          <p className="text-center text-sm max-w-100 text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-brand sub-gradient font-heading underline underline-offset-4"
            >
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-brand sub-gradient font-heading underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
