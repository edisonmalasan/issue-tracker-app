import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "../../validationSchema";


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);

    if (!validation.success) 
        return NextResponse.json(validation.error.format(), { status: 400 }); // client error 

    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description}
    });

    return NextResponse.json(newIssue, {status: 201}) // 201 Created
}

export async function GET(request: NextRequest) {
    return {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "Hello" }),
    };
}