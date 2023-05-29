import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
import { NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest)
{
    return new NextResponse('Hello, Next.js!');
}

export async function POST(request: NextRequest, response: NextApiResponse)
{
    try {
        const { token } = await request.json();
        const decodedToken = jwt.decode(token.split(" ")[ 1 ]) as { exp?: number; };

        if (decodedToken?.exp) {
            const expirationTimestamp = decodedToken.exp;
            const expirationDate = new Date(expirationTimestamp * 1000); // Convert expiration timestamp to milliseconds

            return new NextResponse(JSON.stringify({ success: true, token }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Set-Cookie": serialize("token", token, {
                        path: "/",
                        httpOnly: true,
                        expires: expirationDate,
                        secure: true,
                        sameSite: true,
                    }),
                },
            });
        }

        // Handle case when the JWT does not contain an expiration time

        return new NextResponse(JSON.stringify({ success: true, token }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": serialize("token", token, {
                    path: "/",
                    httpOnly: true,
                    secure: true,
                    sameSite: true,
                }),
            },
        });
    } catch (error: any) {
        console.log(error);
    }
}
