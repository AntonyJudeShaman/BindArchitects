import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import logo from "@/components/favicon.png";
import bg from "./bg.jpg";
import { Metadata } from "next";
import Particles from "@/components/particles";

export const metadata: Metadata = {
  title: "Login | Studio Bind",
  description: "Login to your account",
};

export default function Login() {
  return (
    <div className="grid grid-cols-1 md:-ml-32 md:-mr-32 lg:grid-cols-2 h-screen animate-fade-in">
      <Particles
            className="animate-fade-in h-full absolute inset-0 -z-10"
            quantity={100}
          />
      <div className="hidden lg:flex lg:h-full lg:w-full lg:items-center lg:bg-cover lg:bg-center">
        <Image
          src={bg}
          alt="Background"
          className="h-screen w-full object-cover"
          style={{
            filter: "contrast(180%) brightness(80%)",
          }}
        />
      </div>

      {/* Right Half */}
      <div className="flex flex-col md:w-2/3 w-full bg-transparent items-center mx-auto d-block justify-center">
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
