import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest, res: NextResponse) => {
  if (req.method === "GET") {
    try {
      const packageData = {
        package: [
          {
            imgurl:
              "https://lovevery.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F0sea1vycfyqy%2FaqIcnerLRz8mMTqaLuTDp%2Ff36b9ffd2b00e1aebd8920191ea4835f%2FPlayKits_US.png&w=480&q=75",
            header: "The Play Kits",
            description:
              "Stage-based play essentials designed by experts to support brain development",
            url: "https://lovevery.com/products/the-play-kits",
          },
          {
            imgurl:
              "https://lovevery.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F0sea1vycfyqy%2F5gHflO2BjgC8TQxDOM3A2Q%2F7cb78df624090d0a3eadbbc5577f251a%2FPlayGym_EU_US.png&w=480&q=75",
            header: "The Play Gym",
            description:
              "An entire first year of play and learning for your baby’s developing brain",
            url: "https://lovevery.com/products/the-play-gym",
          },
          {
            imgurl:
              "https://lovevery.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F0sea1vycfyqy%2F5iBoiIZDyB1x15KyLLAd4e%2F9ea0ada7fc51c37f39e2b91674347c3a%2FMask_group.png&w=480&q=75",
            header: "The Course Packs",
            description:
              "Everything you and your child need to tackle new stages, together.",
            url: "https://lovevery.com/products/the-course-packs",
          },
        ],
      };
      // Send a test success response
      return NextResponse.json({packageData, statusCode: 200});
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

export { handler as GET };
