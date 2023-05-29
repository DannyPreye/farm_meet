import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";



export async function middleware(request: NextRequest, response: NextResponse)
{
    const token = request.cookies.get("token")?.value;



    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        if (!token) {
            return NextResponse.redirect(new URL("/auth/signin", request.url));
        }

        const splitToken = token.split(" ")[ 1 ];
        const jwtdata = jwt.decode(splitToken as string);

        if (!jwtdata) {
            return NextResponse.redirect(new URL("/auth/signin", request.url));
        }
    } else if (request.nextUrl.pathname.startsWith("/auth")) {
        if (token) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
    }



    return NextResponse.next();
}