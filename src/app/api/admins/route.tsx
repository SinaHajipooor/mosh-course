import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json([
        {
            id: 1,
            name: 'sina'
        },
        {
            id: 2,
            name: 'mamad'
        }
    ])
}