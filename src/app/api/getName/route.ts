import { NextResponse } from "next/server";
import { user } from "@/data/properties";

export async function GET() {
  return NextResponse.json({ data: user });
}
