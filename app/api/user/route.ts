import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import axios from "axios";


export async function GET(req: NextRequest, res: NextResponse)
{
    const token = req.cookies.get("token")?.value;

    const decode_token = jwt.decode(token?.split(" ")[ 1 ] as string);



    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/user/${decode_token?.sub}`, {
            headers: {
                Authorization: token
            }
        });

        console.log("res", response);
        return NextResponse.json({
            user: response.data.user
        });


    } catch (error: any) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong"
        });

    }

}