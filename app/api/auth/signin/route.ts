import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { serialize } from "cookie";
import { NextApiResponse } from "next";
import jwt from "jsonwebtoken";


export async function GET(request: Request,)
{
    return new Response('Hello, Next.js!');
}

export async function POST(request: Request, response: NextApiResponse)
{

    const { token } = await request.json();
    const decode_token = jwt.decode(token.split(" ")[ 1 ]);
    // const expires = decode_token?.exp;
    try {

        const oneDayInSeconds = 24 * 60 * 60; // One day in seconds

        return new Response(JSON.stringify({ success: true, token }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": serialize(
                    "token",
                    token,
                    {
                        path: "/",
                        httpOnly: true,
                        expires: new Date(Date.now() + 86400),
                        secure: true,
                        sameSite: true
                    })
            }
        });


    } catch (error: any) {
        console.log(error);
    }
}