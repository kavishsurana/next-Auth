import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    console.log(session);
    {JSON.stringify(session)}
    return NextResponse.json({
        session
        
    })
}