import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: "obteniendo tarea con id...",
    })
}