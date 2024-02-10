import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";
import favicon from "@/components/favicon.png";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <div
      className="flex  min-h-screen md:-ml-32 md:-mr-32 ml-0 mr-0  items-center text-white bg-black/80 justify-center"
    >
      You cannot register as an admin.
    </div>
  );
}
