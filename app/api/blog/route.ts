import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(req: Request, res: Response) {
  try {
    const post = await req.json();
    const { title, category, imageUrl, body, userEmail } = post;
    const blog = await prisma.post.create({
      data: {
        title,
        catName: category,
        imageUrl,
        body,
        userEmail,
      },
    });
    return NextResponse.json(blog);
  } catch (error: any) {
    return NextResponse.json(error);
  }
}
