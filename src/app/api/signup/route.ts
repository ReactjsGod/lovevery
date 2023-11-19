import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "POST") {
    try {
      const formData = await req.json();
      console.log("The form data from the client", formData);

      // Send a test success response
      return NextResponse.json({ message: "Signup successful!" });
    } catch (error) {
      console.error("Error processing signup:", error);
      return NextResponse.json({
        message: "Internal Server Error",
        statusCode: 500,
      });
    }
  } else {
    return NextResponse.json({
      message: "Method Not Allowed",
      statusCode: 405,
    });
  }
};

export { handler as POST };
