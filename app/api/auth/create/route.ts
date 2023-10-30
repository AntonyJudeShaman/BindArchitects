import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { projectName, projectNumber, description1, description2, description3, description4, description5, uploadImage } = await req.json();


  const projects = await prisma.project.create({
    data: {
      projectNumber: projectNumber,
      projectName: projectName,
      description1: description1,
      image1: uploadImage,
    },
  });
  return NextResponse.json(projects);
}
