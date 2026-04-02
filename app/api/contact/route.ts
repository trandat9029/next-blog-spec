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
      message: "Cảm ơn bạn đã nhắn tin. Chúng tôi sẽ phản hồi sớm.",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Dữ liệu chưa hợp lệ",
          errors: error.issues.map((issue) => ({ message: issue.message })),
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Đã xảy ra lỗi máy chủ",
      },
      { status: 500 },
    );
  }
}

