import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { projectId } = await req.json();
  const project = await prisma.project.findMany({
    where: {
      projectId,
    }
  });
    return NextResponse.json(project);
  }

