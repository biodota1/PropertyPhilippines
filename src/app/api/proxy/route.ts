import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://dlnk.one/e?id=bjyERE3DxNAm&type=1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
