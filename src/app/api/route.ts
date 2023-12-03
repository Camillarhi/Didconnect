import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response("Hello world!");
}

export async function GETit(request: Request) {
  const { searchParams } = new URL(request.url);

  return NextResponse.json(searchParams);
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const { title, description, level, link } = await request.json();

  return NextResponse.json("");
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
