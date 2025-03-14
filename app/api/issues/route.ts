import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 }); // client error 
    } else {
        return NextResponse.json(validation.data.title, {status: 200});
    }
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