import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { contactSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    await new Promise((resolve) => setTimeout(resolve, 500));
    void validatedData;

    return NextResponse.json({
      success: true,
      message: "Thanks for your message. We will get back to you soon.",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.issues.map((issue) => ({ message: issue.message })),
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Unexpected server error",
      },
      { status: 500 },
    );
  }
}

